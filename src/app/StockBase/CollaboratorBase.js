import Base from './Base';
import CollaboratorModel from '../models/Collaborator';
import CompanyBase from '../StockBase/CompanyBase';

class ColaboratorBase extends Base {
  constructor() {
    super(CollaboratorModel);
  }

  async create(collaboratorInfo) {
    if (collaboratorInfo.companyDocument) {
      const idCompany = await CompanyBase.getIdByCpfCnpj(collaboratorInfo);
      const collaborators = await this.listAll(idCompany);
      console.log(collaborators);
      console.log(collaborators.length);
      if (collaborators.length == 0) {
        collaboratorInfo.idCompany = idCompany;
        collaboratorInfo.idAccessLevel = 1;
        const collaborator = await super.create(collaboratorInfo);
        return collaborator;
      } else {
        collaboratorInfo.idCompany = idCompany;
        collaboratorInfo.idAccessLevel = 3;
        const collaborator = await super.create(collaboratorInfo);
        return collaborator;
      }
    }
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
