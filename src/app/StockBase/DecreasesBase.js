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
    const decreases = await super.create(body);
    this.LotBase.decrease(DecreasesInfo);
    return decreases;
  }
}
export default new DecreasesBase();
