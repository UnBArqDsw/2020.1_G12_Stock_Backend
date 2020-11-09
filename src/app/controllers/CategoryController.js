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

  async index(req, res) {
    const { idCompany } = req.params;
    try {
      const categories = await CategoryBase.listAll(idCompany);
      return res.json(categories);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }
}

export default new CategoryController();
