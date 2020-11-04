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
    const { idCompany } = req.params;

    try {
      const collaborators = await CollaboratorBase.listAll(idCompany);

      return res.json(
        collaborators.map((collaborators) =>
          _.omit(collaborators.dataValues, ['password'])
        )
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
          ])
        );
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }

  async update(req, res) {
    const { idCollaborator } = req.params;

    try {
      const response = await CollaboratorBase.update(req.body, idCollaborator);

      if (response)
        return res
          .status(200)
          .json({ message: 'Collaborator updated successfully.' });

      return res.status(400).json({ message: 'Error updating Collaborator.' });
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }
}

export default new CollaboratorController();
