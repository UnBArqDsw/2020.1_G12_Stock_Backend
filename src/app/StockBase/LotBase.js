import Base from './Base';
import LotModel from '../models/Lot';
import DecreasesBase from './DecreasesBase';

class LotBase extends Base {
  constructor() {
    super(LotModel);
    this.DecreasesBase = DecreasesBase;
  }
  async create(LotInfo, CollaboratorInfo) {
    let body = LotInfo;
    body.idCollaborator = CollaboratorInfo.idCollaborator;
    const lot = await super.create(body);
    return lot;
  }
  async decrease(DecreasesInfo, CollaboratorInfo) {
    const quantity = DecreasesInfo.quantity;
    const lot = await super.findOne({ where: { idLot: DecreasesInfo.idLot } });
    const current_quantity = lot.dataValues.productQty;
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
    this.DecreasesBase.create(DecreasesInfo, CollaboratorInfo);
    return updated_lot;
  }
  async findAll(LotInfo) {
    const lot = await super.findAll({where: { idProduct: LotInfo.idProduct }, order: [['dueDate', 'ASC']]});
    return lot;
  }
  async update(LotInfo, WhereInfo) {
    console.log(WhereInfo);
    const lot = await super.update(LotInfo, WhereInfo);
    return lot;
  }
}
export default new LotBase();
