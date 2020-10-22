import LotBase from '../StockBase/LotBase';

class ProductController {
  async create(req, res) {
    try {
      const lot = await LotBase.create(req.body, req.collaborator);
      return res.json(lot);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
  async decreases(req, res){
    try {
      const lot = await LotBase.decrease(req.body, req.collaborator);
      return res.json(lot);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
}
export default new ProductController();
