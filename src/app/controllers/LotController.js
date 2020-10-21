import LotBase from '../StockBase/LotBase';
import _ from 'lodash';

class ProductController{
  async create(req, res){
    try{
      const lot = await LotBase.create(req.body);
      return res.json(lot);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
}
export default new ProductController();
