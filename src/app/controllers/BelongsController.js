import BelongsBase from '../StockBase/BelongsBase';
import CategoryBase from '../StockBase/CategoryBase';

class BelongsController {
  async create(req, res) {
    try {
      const belongs = await BelongsBase.create(req.body);
      return res.json(belongs);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }

  async index(req, res) {
    const { idProduct } = req.params;
    try {
      const categories = await BelongsBase.listAll(idProduct);
      return res.json(categories);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }

  async indexCategories(req, res) {
    console.log('entrou');
    const { idCompany } = req.collaborator;
    let categoryArray = [];

    try {
      const categories = await CategoryBase.listAll(idCompany);

      for (let i in categories) {
        let products = await BelongsBase.listProductsByCategory(
          categories[i].idCategory
        );
        categoryArray.push({
          value: products.length,
          name: categories[i].name,
        });
      }

      return res.json(
        categoryArray.sort((a, b) => {
          return b.value - a.value;
        })
      );
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }
}

export default new BelongsController();
