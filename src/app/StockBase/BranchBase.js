import Base from './Base';
import BranchModel from '../models/Branch';

class BranchBase extends Base {
  constructor() {
    super(BranchModel);
  }

  async create(BranchInfo) {
    const branch = await super.create(BranchInfo);
    return branch;
  }

  async listAll() {
    const branchs = await super.findAll({attributes:['idBranch', 'name']});
    return branchs;
  }
}

export default new BranchBase();
