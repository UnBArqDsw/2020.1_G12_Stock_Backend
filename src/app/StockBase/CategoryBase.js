import Base from './Base';
import CategoryModel from '../models/Category';

class CategoryBase extends Base {
  constructor() {
    super(CategoryModel);
  }

  async create(CategoryInfo) {
    const category = await super.create(CategoryInfo);
    return category;
  }

  async listAll(idCompany) {
    const categories = await super.findAll({ where: { idCompany } });
    return categories;
  }
}

export default new CategoryBase();
