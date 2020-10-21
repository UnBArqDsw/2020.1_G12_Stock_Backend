import ProductBase from '../StockBase/ProductBase';

class ProductController {
  async create(req, res) {
    try {
      const product = await ProductBase.create(req.body, req.collaborator);
      return res.json(product);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }
  async destroy(req, res) {
    try{
      const response = await ProductBase.destroy(req.body);
      return res.json(response);
    }catch(error){
      return res.status(400).json({ message: error.message || error });
    }
  }
}
export default new ProductController();
