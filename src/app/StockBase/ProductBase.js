import Base from './Base';
import ProductModel from '../models/Product';
import LotBase from '../StockBase/LotBase';
import DecreasesBase from '../StockBase/DecreasesBase';
import BelongsBase from '../StockBase/BelongsBase';
import CategoryBase from '../StockBase/CategoryBase';

class ProductBase extends Base {
  constructor() {
    super(ProductModel);
    this.ProductModel = ProductModel;
    this.LotBase = LotBase;
    this.DecreasesBase = DecreasesBase;
  }

  async update(ProductInfo) {
    const idProduct = ProductInfo.idProduct;
    const lots = await this.LotBase.findAll({ idProduct });
    var quantity = 0;
    for (const lot of lots) {
      quantity += lot.productQty;
    }
    const product = {
      idProduct: idProduct,
      quantity: quantity,
    };
    const updated_product = super.update(product, {
      where: { idProduct: idProduct },
    });
    return updated_product;
  }

  async create(ProductInfo, CollaboratorInfo) {
    let body = ProductInfo;
    body.idCollaborator = CollaboratorInfo.idCollaborator;
    body.idCompany = CollaboratorInfo.idCompany;
    const product = await super.create(body);

    if (product && ProductInfo.categories.length) {
      await BelongsBase.create({
        idProduct: product.idProduct,
        idCategory: ProductInfo.categories,
      });
    }
    return product;
  }

  async listAll(idCompany) {
    let products = await super.findAll({ where: { idCompany } });
    const lotPromises = await Promise.all(
      products.map(async (product) =>
        LotBase.findAll({ idProduct: product.idProduct })
      )
    );
    console.log('------categories------');
    const categoriesPromises = await Promise.all(
      products.map(async (product) => {
        const belongs = await BelongsBase.findAll({
          where: { idProduct: product.idProduct },
        });
        //um produto só
        const categoryPromises = await Promise.all(
          belongs.map(async (blgs) => {
            let category = CategoryBase.findOne({
              where: { idCategory: blgs.idCategory },
            });
            return category;
          })
        );
        return categoryPromises;
      })
    );
    console.log(products);
    products = products.map((product, i) => {
      product.dataValues.lots = lotPromises[i];
      product.dataValues.categories = categoriesPromises[i];
      return product;
    });
    return products;
  }

  async destroy(ProductInfo) {
    const response = this.ProductModel.destroy({
      where: { idProduct: ProductInfo.idProduct },
    });
    return response;
  }

  async decrease(DecreaseInfo, CollaboratorInfo) {
    let quantity = DecreaseInfo.quantity;
    let idProduct = DecreaseInfo.idProduct;
    const lots = await this.LotBase.findAll({ idProduct: idProduct });
    const product = await super.findOne({ where: { idProduct: idProduct } });
    let current_product_quantity = null;
    try {
      current_product_quantity = product.dataValues.quantity;
    } catch (error) {
      throw Error('Produto não encontrado.');
    }
    if (quantity > current_product_quantity) {
      throw Error('Quantidade indisponível para decremento.');
    }
    for (const lot of lots) {
      let current_quantity = lot.productQty;
      if (quantity == 0) {
        break;
      }
      if (current_quantity <= 0) {
        continue;
      } else if (current_quantity >= quantity) {
        await this.LotBase.update(
          { productQty: current_quantity - quantity },
          { where: { idLot: lot.idLot } }
        );
        let decreases = {};
        decreases.idLot = lot.idLot;
        decreases.idDecreasesType = 2;
        decreases.quantity = quantity;
        quantity = 0;
        DecreasesBase.create(decreases, CollaboratorInfo);

        break;
      } else if (current_quantity < quantity) {
        quantity -= current_quantity;
        await this.LotBase.update(
          { productQty: 0 },
          { where: { idLot: lot.idLot } }
        );
        let decreases = {};
        decreases.idLot = lot.idLot;
        decreases.idDecreasesType = 2;
        decreases.quantity = current_quantity;

        DecreasesBase.create(decreases, CollaboratorInfo);
      }
    }

    await this.update({ idProduct: idProduct });
    const updated_product = await super.findOne({
      where: { idProduct: idProduct },
    });
    return updated_product;
  }
}

export default new ProductBase();
