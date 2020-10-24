import Base from './Base';
import LotModel from '../models/Lot';
import DecreasesBase from './DecreasesBase';
import ProductBase from './ProductBase';

class LotBase extends Base {
  constructor() {
    super(LotModel);
    this.DecreasesBase = DecreasesBase;
    this.ProductBase = ProductBase;
  }

  async create(LotInfo, CollaboratorInfo) {
    let body = LotInfo;
    body.idCollaborator = CollaboratorInfo.idCollaborator;
    const lot = await super.create(body);
    await ProductBase.update({ idProduct: lot.idProduct });
    return lot;
  }

  async listAll(idProduct) {
    const lots = await super.findAll({ where: { idProduct } });
    return lots;
  }

  async decrease(DecreasesInfo, CollaboratorInfo) {
    const quantity = DecreasesInfo.quantity;
    const lot = await super.findOne({ where: { idLot: DecreasesInfo.idLot } });
    let current_quantity;
    try {
      current_quantity = lot.dataValues.productQty;
    } catch (error) {
      throw Error('Lot não encontrado.');
    }
    if (quantity > current_quantity) {
      throw Error('Quantidade indisponível para decremento.');
    }
    await super.update(
      { productQty: current_quantity - quantity },
      { where: { idLot: DecreasesInfo.idLot } }
    );
    const updated_lot = await super.findOne({
      where: { idLot: DecreasesInfo.idLot },
    });
    DecreasesInfo.idDecreasesType = 1;
    await this.DecreasesBase.create(DecreasesInfo, CollaboratorInfo);

    await ProductBase.update({ idProduct: updated_lot.idProduct });

    return updated_lot;
  }

  async findAll(LotInfo) {
    const lots = await super.findAll({
      where: { idProduct: LotInfo.idProduct },
      order: [['dueDate', 'ASC']],
    });
    let all_lots = [];
    for (const lot of lots) {
      all_lots.push(lot.dataValues);
    }
    return all_lots;
  }

  async update(LotInfo, WhereInfo) {
    const lot = await super.update(LotInfo, WhereInfo);
    return lot;
  }
}

export default new LotBase();
