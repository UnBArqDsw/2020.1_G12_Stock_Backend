import Base from './Base';
import ProductModel from '../models/Product';

class ProductBase extends Base {
  constructor() {
    super(ProductModel);
    this.ProductModel = ProductModel;
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
}
export default new ProductBase();
