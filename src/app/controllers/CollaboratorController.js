import CollaboratorBase from '../StockBase/CollaboratorBase';
import _ from 'lodash';

class CollaboratorController {
  async create(req, res) {
    try {
      const collaborator = await CollaboratorBase.create(req.body);
      return res.json(collaborator);
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
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }

  async find(req, res) {
    const { idCollaborator } = req.collaborator;
    try {
      const response = await CollaboratorBase.findOne({idCollaborator});
      console.log(response.dataValues);
      return res.json(_.pick(response.dataValues, [
        'idCollaborator',
        'idAccessLevel',
        'idCompany',
        'name',
        'photo'
      ]));
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

  async findByPk(req, res){
    const {idCollaborator} = req.params;
    try {
      const response = await CollaboratorBase.findOne({idCollaborator});
      console.log(response.dataValues);
      return res.json(_.pick(response.dataValues, [
        'idCollaborator',
        'idAccessLevel',
        'idCompany',
        'name',
        'photo'
      ]));
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }

  async min(req, res){
    const { idCompany } = req.collaborator;
    try {
      
      const response = await CollaboratorBase.listAll(idCompany);
      let collaborators = response.map((element)=>{return {idCollaborator: element.dataValues.idCollaborator, name: element.dataValues.name}});
      return res.json(collaborators);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ message: error.message || error });
    }
  }
}

export default new CollaboratorController();
