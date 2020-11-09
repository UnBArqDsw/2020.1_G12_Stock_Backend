import Base from './Base';
import AccessLevelModel from '../models/AccessLevel';

class AccessLevelBase extends Base {
  constructor() {
    super(AccessLevelModel);
  }

  async listOne(idAccessLevel) {
    const accessLevel = await super.findAll({ where: { idAccessLevel } });
    return accessLevel;
  }

  async listAll() {
    const accessLevel = await super.listAll();
    return accessLevel;
  }
}
export default new AccessLevelBase();
