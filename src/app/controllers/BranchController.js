import BranchBase from '../StockBase/BranchBase';
class BranchController {
  async index(req, res) {
    try {
      const branchs = await BranchBase.listAll();
      return res.json(branchs);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }
}
export default new BranchController();
