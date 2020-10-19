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

  async listAll(idCompany) {
    const collaborators = await super.findAll({ where: { idCompany } });
    return collaborators;
  }

  async auth(document, password) {
    const collaborator = await super.findOne({ where: { document } });
    if (!collaborator)
      throw { status: 401, message: 'Verifique seu documento e senha' };

    const isPasswordValid = await collaborator.verifyPassword(password);

    if (isPasswordValid) {
      return { collaborator, token: collaborator.generateJWT() };
    } else {
      throw { status: 401, message: 'Verifique seu documento e senha' };
    }
  }
}
export default new ColaboratorBase();
