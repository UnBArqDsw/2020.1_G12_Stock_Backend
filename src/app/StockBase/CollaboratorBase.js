import Base from './Base';
import CollaboratorModel from '../models/Collaborator';

class ColaboratorBase extends Base {
  constructor() {
    super(CollaboratorModel);
  }

  async create(collaboratorInfo) {
    const collaborator = await super.create(collaboratorInfo);
    return collaborator;
  }
}
export default new ColaboratorBase();
