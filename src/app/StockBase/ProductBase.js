import Base from './Base';
import ProductModel from '../models/Product';
import LotBase from '../StockBase/LotBase';
import DecreasesBase from '../StockBase/DecreasesBase';

class ProductBase extends Base {
  constructor() {
    super(ProductModel);
    this.ProductModel = ProductModel;
    this.LotBase = LotBase;
    this.DecreasesBase = DecreasesBase;
  }
  async create(ProductInfo, CollaboratorInfo) {
    let body = ProductInfo;
    body.idCollaborator = CollaboratorInfo.idCollaborator;
    body.idCompany = CollaboratorInfo.idCompany;
    const product = await super.create(body);
    return product;
  }
  async destroy(ProductInfo) {
    const response = this.ProductModel.destroy({
      where: { idProduct: ProductInfo.idProduct },
    });
    return response;
  }
  async decrease(DecreaseInfo, CollaboratorInfo) {
    let quantity = DecreaseInfo.quantity;
    const idProduct = DecreaseInfo.idProduct;
    const lots = await this.LotBase.findAll({idProduct: idProduct});
    for(const lot of lots){
      let current_quantity = lot.productQty
      if(current_quantity >= quantity){
        await this.LotBase.update(
          { productQty: current_quantity - quantity },
          { where: { idLot: lot.idLot } }
        );
        let decreases = {};
        decreases.idLot = lot.idLot;
        decreases.idDecreasesType = 2;
        decreases.quantity = quantity;

        DecreasesBase.create(decreases, CollaboratorInfo);

        break;
      }else{
        quantity-=current_quantity;
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
    const product = super.findOne({idProduct});
    return product;
  }
}
export default new ProductBase();
