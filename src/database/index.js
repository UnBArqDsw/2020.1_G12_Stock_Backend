import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import BranchModel from '../app/models/Branch';
import AccessLevelModel from '../app/models/AccessLevel';
import CollaboratorModel from '../app/models/Collaborator';
import CompanyModel from '../app/models/Company';

const models = [BranchModel, AccessLevelModel, CollaboratorModel, CompanyModel];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
