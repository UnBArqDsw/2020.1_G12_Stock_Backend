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
}
export default new LotBase();
