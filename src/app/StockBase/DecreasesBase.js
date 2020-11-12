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
    let date = new Date();
    body.date = date.toLocaleDateString();
    body.time = date.toLocaleTimeString();

    const decreases = await super.create(body);
    return decreases;
  }

  async listAll(idDecreasesType) {
    const decreases = await super.findAll({ where: { idDecreasesType } });
    return decreases;
  }
}

export default new DecreasesBase();
