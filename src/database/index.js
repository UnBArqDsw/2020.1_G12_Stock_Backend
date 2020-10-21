import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import BranchModel from '../app/models/Branch';
import AccessLevelModel from '../app/models/AccessLevel';
import CollaboratorModel from '../app/models/Collaborator';
import CompanyModel from '../app/models/Company';
import ProductModel from '../app/models/Product';
import LotModel from '../app/models/Lot';
import CategoryModel from '../app/models/Category';
import BelongsModel from '../app/models/Belongs';

const models = [
  BranchModel,
  AccessLevelModel,
  CollaboratorModel,
  CompanyModel,
  ProductModel,
  LotModel,
  CategoryModel,
  BelongsModel,
];

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
