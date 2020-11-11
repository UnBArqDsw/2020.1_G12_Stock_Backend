import CategoryBase from '../StockBase/CategoryBase';

class CategoryController {
  async create(req, res) {
    try {
      const { idCompany } = req.collaborator;
      const body = {
        idCompany,
        ...req.body,
      };
      const category = await CategoryBase.create(body);
      return res.json(category);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }

  async index(req, res) {
    const { idCompany } = req.collaborator;
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
