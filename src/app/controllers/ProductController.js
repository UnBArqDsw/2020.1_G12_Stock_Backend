import ProductBase from '../StockBase/ProductBase';
import _ from 'lodash';

class ProductController{
  async create(req, res){
    try{
      const product = await ProductBase.create(req.body, req.collaborator);
      return res.json(product);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
}
export default new ProductController();
