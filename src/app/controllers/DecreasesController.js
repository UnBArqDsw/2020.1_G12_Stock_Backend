import DecreasesBase from '../StockBase/DecreasesBase';
import moment from 'moment';

class DecreasesController {
  async create(req, res) {
    try {
      const decreases = await DecreasesBase.create(req.body, req.collaborator);
      return res.json(decreases);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }

  async index(req, res) {
    const { idDecreasesType } = req.params;
    const { idCompany } = req.collaborator;
    try {
      const decreases = await DecreasesBase.listAll(idDecreasesType, idCompany);
      console.log(decreases);
      return res.json(decreases);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }

  async listDaySales(req, res) {
    let salesData = [];
    let date = '';
    const month = moment().format('MMM');
    const {idCompany} = req.collaborator;
    try {
      for (let i = 0; i < moment().endOf('month').format('DD'); i++) {
        i < 9
          ? (date = `${moment().format('YYYY')}-${moment().format('MM')}-0${
              i + 1
            }T00:00:00.000Z`)
          : (date = `${moment().format('YYYY')}-${moment().format('MM')}-${
              i + 1
            }T00:00:00.000Z`);
        let decreases = await DecreasesBase.listDaySales(date, idCompany);
        salesData.push({
          name: i + 1 + ' ' + month,
          Vendas: decreases.length,
        });
      }
      return res.json(salesData);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }

  async getDecreasesByWeek(req, res) {
    try {
      const { idDecreasesType } = req.query;
      const { idCompany } = req.collaborator;
      const decreases = await DecreasesBase.getDecreasesByWeek(idDecreasesType, idCompany);
      return res.json(decreases);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }
}

export default new DecreasesController();
