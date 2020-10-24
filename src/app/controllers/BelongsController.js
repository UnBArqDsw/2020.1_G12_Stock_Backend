import BelongsBase from '../StockBase/BelongsBase';

class BelongsController {
  async create(req, res) {
    try {
      const belongs = await BelongsBase.create(req.body);
      return res.json(belongs);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }

  async index(req, res) {
    const { idProduct } = req.params;
    try {
      const categories = await BelongsBase.listAll(idProduct);
      return res.json(categories);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }
}

export default new BelongsController();
