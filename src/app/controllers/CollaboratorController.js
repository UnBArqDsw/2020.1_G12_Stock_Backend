import CollaboratorBase from '../StockBase/CollaboratorBase';

class CollaboratorController {
  async create(req, res) {
    try {
      const colaborator = await CollaboratorBase.create(req.body);
      return res.json(colaborator);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
}

export default new CollaboratorController();
