import Base from './Base';
import DecreasesModel from '../models/Decreases';
import LotBase from '../StockBase/LotBase';
import Lot from '../models/Lot';
import Product from '../models/Product';
import Collaborator from '../models/Collaborator';

class DecreasesBase extends Base {
  constructor() {
    super(DecreasesModel);
    this.DecreasesModel = DecreasesModel;
    this.LotBase = LotBase;
  }

  async create(DecreasesInfo, CollaboratorInfo) {
    let body = DecreasesInfo;
    body.idCollaborator = CollaboratorInfo.idCollaborator;
    let date = new Date();
    body.date = date.toLocaleDateString();
    body.time = date.toLocaleTimeString();

    const decreases = await super.create(body);
    return decreases;
  }

  async listAll(idDecreasesType) {
    const decreases = await super.findAll({
      where: { idDecreasesType },
      include: [
        {
          model: Lot,
          as: 'lot',
          attributes: ['idLot', 'idProduct'],
          include: [
            {
              model: Product,
              as: 'product',
              attributes: ['name', 'salePrice'],
            },
          ],
        },
        {
          model: Collaborator,
          as: 'collaborator',
          attributes: ['name'],
        },
      ],
      order: [['date', 'DESC']],
    });
    return decreases;
  }

  async listDaySales(date) {
    console.log(date);
    const decreases = await super.findAll({
      where: { idDecreasesType: 2, date },
    });
    return decreases;
  }
}

export default new DecreasesBase();
