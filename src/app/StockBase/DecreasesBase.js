import Base from './Base';
import DecreasesModel from '../models/Decreases';
import LotBase from '../StockBase/LotBase';

class DecreasesBase extends Base {
  constructor() {
    super(DecreasesModel);
    this.DecreasesModel = DecreasesModel;
    this.LotBase = LotBase;
  }
  async create(DecreasesInfo, CollaboratorInfo) {
    let body = DecreasesInfo;
    body.idCollaborator = CollaboratorInfo.idCollaborator;
    const lot = await this.LotBase.decrease(DecreasesInfo);
    await super.create(body);
    return lot;
  }
}
export default new DecreasesBase();
