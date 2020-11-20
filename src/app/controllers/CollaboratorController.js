import CollaboratorBase from '../StockBase/CollaboratorBase';
import _ from 'lodash';

class CollaboratorController {
  async create(req, res) {
    try {
      req.body.activate = true;
      const collaborator = await CollaboratorBase.create(req.body);
      return res.json(_.omit(collaborator.dataValues, ['password']));
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }

  async index(req, res) {
    const { idCompany } = req.collaborator;
    try {
      const collaborators = await CollaboratorBase.listAll(idCompany);

      return res.json(collaborators);
    } catch (error) {
      return res.status(400).json({ message: error.message || error });
    }
  }

  async getCollaborator(req, res) {
    const { idCollaborator } = req.params;

    try {
      const collaborator = await CollaboratorBase.listCollaborator(
        idCollaborator
      );
      if (collaborator === null) {
        return res.status(404).json({
          message: 'Colaborador não existente.',
        });
      }
      return res
        .status(200)
        .json(_.omit(collaborator.dataValues, ['password']));
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }

  async find(req, res) {
    const { idCollaborator } = req.collaborator;
    try {
      const response = await CollaboratorBase.findOne({ idCollaborator });
      console.log(response.dataValues);
      return res.json(
        _.pick(response.dataValues, [
          'idCollaborator',
          'idAccessLevel',
          'idCompany',
          'name',
          'photo',
        ])
      );
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }

  async auth(req, res) {
    const { document, password } = req.body;

    try {
      const response = await CollaboratorBase.auth(document, password);
      return res
        .header('x-auth-token', response.token)
        .json(
          _.pick(response.collaborator, [
            'idCollaborator',
            'idAccessLevel',
            'idCompany',
            'name',
            'document',
            'photo',
            'Company',
          ])
        );
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }

  async updateProfile(req, res) {
    const { idCollaborator } = req.params;
    const { idAccessLevel, activate } = req.body;
    try {
      if (idAccessLevel || activate) {
        return res.status(403).json({
          message:
            'Não é possível editar nível de acesso ou status do colaborador.',
        });
      }
      const response = await CollaboratorBase.updateProfile(
        req.body,
        idCollaborator
      );

      if (response)
        return res
          .status(200)
          .json({ message: 'Colaborar editado com sucesso.' });

      return res.status(400).json({ message: 'Erro ao editar colaborador.' });
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }

  async updateCollaborator(req, res) {
    const { idCollaborator } = req.params;
    const { password } = req.body;
    try {
      if (password) {
        return res.status(403).json({
          message: 'Não é possível editar senha do colaborador.',
        });
      }

      const response = await CollaboratorBase.updateCollaborator(
        req.body,
        idCollaborator
      );

      if (response)
        return res
          .status(200)
          .json({ message: 'Colaborar editado com sucesso.' });

      return res.status(400).json({ message: 'Erro ao editar colaborador.' });
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }
}

export default new CollaboratorController();
