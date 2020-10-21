import Base from './Base';
import LotModel from '../models/Lot';

class LotBase extends Base {
  constructor() {
    super(LotModel);
    this.LotModel = LotModel;
  }
  async create(LotInfo, CollaboratorInfo) {
    let body = LotInfo;
    body.idCollaborator = CollaboratorInfo.idCollaborator;
    const lot = await super.create(body);
    return lot;
  }
  async decrease(DecreasesInfo){
    const quantity = DecreasesInfo.quantity;
    const lot = await super.findOne({where: {idLot: DecreasesInfo.idLot}})
    const current_quantity = lot.dataValues.productQty;
    if(quantity > current_quantity){
      throw Error('Quantidade indisponível para decremento.');
    }
    const updated_lot = await this.LotModel.update({productQty: current_quantity-quantity},{where: {idLot: DecreasesInfo.idLot}});
    return updated_lot;
  }
}
export default new LotBase();
