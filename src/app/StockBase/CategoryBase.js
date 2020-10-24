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
}
export default new CategoryBase();
