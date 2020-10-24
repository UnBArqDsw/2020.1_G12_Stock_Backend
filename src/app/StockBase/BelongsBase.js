import Base from './Base';
import BelongsModel from '../models/Belongs';

class BelongsBase extends Base {
  constructor() {
    super(BelongsModel);
  }

  async create(BelongsInfo) {
    let categories = BelongsInfo.idCategory;
    const belongs = [];
    for (const c of categories) {
      const body = {
        idCategory: c,
        idProduct: BelongsInfo.idProduct,
      };
      belongs.push(await super.create(body));
    }
    return belongs;
  }

  async listAll(idProduct) {
    const categories = await super.findAll({ where: { idProduct } });
    return categories;
  }
}

export default new BelongsBase();
