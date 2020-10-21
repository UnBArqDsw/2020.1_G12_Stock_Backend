import DecreasesBase from '../StockBase/DecreasesBase';

class DecreasesController {
  async create(req, res) {
    try {
      const decreases = await DecreasesBase.create(req.body, req.collaborator);
      return res.json(decreases);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
}
export default new DecreasesController();
