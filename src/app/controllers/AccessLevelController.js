import AccessLevelBase from '../StockBase/AccessLevelBase';

class AccessLevelController {
  async index(req, res) {
    try {
      const accessLevel = await AccessLevelBase.listAll();
      return res.json(accessLevel);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
}

export default new AccessLevelController();
