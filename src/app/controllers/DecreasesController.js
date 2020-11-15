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

  async index(req, res) {
    const { idDecreasesType } = req.params;
    try {
      const decreases = await DecreasesBase.listAll(idDecreasesType);

      return res.json(decreases);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }
}

export default new DecreasesController();
