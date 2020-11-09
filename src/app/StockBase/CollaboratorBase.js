import Base from './Base';
import hashPass from '../../utils/hashPass';
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

    if (collaborator.dataValues.activate == false)
      throw { status: 403, message: 'Usuário não autorizado' };

    if (!collaborator)
      throw { status: 401, message: 'Verifique seu documento e senha' };

    const isPasswordValid = await collaborator.verifyPassword(password);

    if (isPasswordValid) {
      return { collaborator, token: collaborator.generateJWT() };
    } else {
      throw { status: 401, message: 'Verifique seu documento e senha' };
    }
  }

  async updateProfile(data, idCollaborator) {
    const { password, newPassword, newConfirmPassword } = data;

    const collaborator = await super.findOne({ where: { idCollaborator } });
    if (!collaborator) throw { status: 404, message: 'Usuário não encontrado' };

    const isPasswordValid = await collaborator.verifyPassword(password);

    if (!isPasswordValid)
      throw { status: 400, message: 'Verifique seu documento e senha' };

    if (newPassword && newConfirmPassword) {
      if (newPassword !== newConfirmPassword)
        throw { status: 401, message: 'Senhas não correspondem' };
      data.password = await hashPass(newPassword);
    }

    data.password = await hashPass(password);
    const collaboratorUpdated = await super.update(data, {
      where: { idCollaborator },
    });
    return collaboratorUpdated ? true : false;
  }

  async updateCollaborator(data, idCollaborator) {
    const collaborator = await super.findOne({ where: { idCollaborator } });
    if (!collaborator) throw { status: 401, message: 'Usuário não encontrado' };

    const collaboratorUpdated = await super.update(data, {
      where: { idCollaborator },
    });
    return collaboratorUpdated ? true : false;
  }
}

export default new ColaboratorBase();
