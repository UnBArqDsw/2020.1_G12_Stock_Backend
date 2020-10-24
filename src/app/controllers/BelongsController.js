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
}
export default new BelongsController();
