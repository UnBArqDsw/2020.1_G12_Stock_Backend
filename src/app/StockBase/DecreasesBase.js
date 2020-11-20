import Base from './Base';
import DecreasesModel from '../models/Decreases';
import LotBase from '../StockBase/LotBase';
import Lot from '../models/Lot';
import Product from '../models/Product';
import Collaborator from '../models/Collaborator';
import moment from 'moment';
import { Op } from 'sequelize';

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
    const decreases = await super.findAll({
      where: { idDecreasesType: 2, date },
    });
    return decreases;
  }

  async getDecreasesByWeek(idDecreasesType) {
    let data = [
      {
        name: 'dom',
        vendas: 0,
      },
      {
        name: 'seg',
        vendas: 0,
      },
      {
        name: 'ter',
        vendas: 0,
      },
      {
        name: ' qua',
        vendas: 0,
      },
      {
        name: 'qui',
        vendas: 0,
      },
      {
        name: 'sex',
        vendas: 0,
      },
      {
        name: 'sab',
        vendas: 0,
      },
    ];

    const dayOfTheWeek = moment().day();

    const decreases = await super.findAll({
      where: {
        idDecreasesType,
        date: {
          [Op.between]: [
            moment().subtract(dayOfTheWeek, 'days').format(),
            moment()
              .add(6 - dayOfTheWeek, 'days')
              .format(),
          ],
        },
      },
    });

    decreases.forEach((decrease) => {
      const decreaseDay = moment(decrease.date).day();
      data[decreaseDay].vendas += decrease.quantity;
    });

    return data;
  }
}

export default new DecreasesBase();
