import AccessLevelBase from '../StockBase/AccessLevelBase';

class AccessLevelController {
  async index(req, res) {
    const { idAccessLevel } = req.params;
    try {
      const accessLevel = await AccessLevelBase.listOne(idAccessLevel);
      return res.json(accessLevel);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }

  async listAll(req, res) {
    try {
      const accessLevel = await AccessLevelBase.listAll();
      return res.json(accessLevel);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
}

export default new AccessLevelController();
