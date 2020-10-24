import CategoryBase from '../StockBase/CategoryBase';

class CategoryController {
  async create(req, res) {
    try {
      const category = await CategoryBase.create(req.body);
      return res.json(category);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
}
export default new CategoryController();
