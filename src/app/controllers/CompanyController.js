import CompanyBase from '../StockBase/CompanyBase';

class CompanyController {
  async create(req, res) {
      try {
        const company = await CompanyBase.create(req.body);
        return res.json(company);
      } catch (error) {
        return res.status(400).json({ message: error.message || error });
      }
    }
}
export default new CompanyController();