import ProductBase from '../StockBase/ProductBase';
import { sendMessage, findConnections } from '../../websocket';

class ProductController {
  async create(req, res) {
    try {
      const product = await ProductBase.create(req.body, req.collaborator);

      const clientsToUpdate = await findConnections(req.collaborator.idCompany);
      sendMessage('new-product', clientsToUpdate, product);

      return res.json(product);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }

  async index(req, res) {
    const { idCompany } = req.collaborator;
    const { filterCategories, orderPrice } = req.query;
    let formatedFilterCategories;

    if (filterCategories) {
      formatedFilterCategories = filterCategories
        .split(',')
        .map((categoryId) => Number(categoryId));
    }

    try {
      const products = await ProductBase.listAll(
        idCompany,
        formatedFilterCategories,
        orderPrice
      );
      return res.json(products);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }

  async destroy(req, res) {
    try {
      const response = await ProductBase.destroy(req.body);
      return res.json(response);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }

  async decrease(req, res) {
    try {
      const response = await ProductBase.decrease(req.body, req.collaborator);

      const clientsToUpdate = await findConnections(req.collaborator.idCompany);
      sendMessage('update-product', clientsToUpdate, response);

      return res.json(response);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message || error });
    }
  }
}

export default new ProductController();
