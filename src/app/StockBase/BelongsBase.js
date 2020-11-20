import Base from './Base';
import BelongsModel from '../models/Belongs';

class BelongsBase extends Base {
  constructor() {
    super(BelongsModel);
  }

  async create(BelongsInfo) {
    const isCategoryArray = typeof BelongsInfo.idCategory === 'object';
    let categories = isCategoryArray
      ? BelongsInfo.idCategory
      : [BelongsInfo.idCategory];

    let belongs = [];

    for (const c of categories) {
      const body = {
        idCategory: c,
        idProduct: BelongsInfo.idProduct,
      };
      belongs.push(super.create(body));
    }
    const promisses = await Promise.all(belongs);
    return promisses;
  }

  async listAll(idProduct) {
    const categories = await super.findAll({ where: { idProduct } });
    return categories;
  }

  async listProductsByCategory(idCategory) {
    const products = await super.findAll({ where: { idCategory } });
    return products;
  }
}

export default new BelongsBase();
