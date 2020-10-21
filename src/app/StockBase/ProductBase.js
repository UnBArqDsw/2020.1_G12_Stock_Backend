import Base from './Base';
import ProductModel from '../models/Product';

class ProductBase extends Base {
  constructor() {
    super(ProductModel);
  }
  async create(ProductInfo, CollaboratorInfo) {
    let body = ProductInfo;
    body.idCollaborator = CollaboratorInfo.idCollaborator;
    body.idCompany = CollaboratorInfo.idCompany;
    const product = await super.create(body);
    return product;
  }
}
export default new ProductBase();
