import Sequelize from 'sequelize';
import redis from 'redis';
import databaseConfig from '../config/database';
import redisConfig from '../config/redis';
import BranchModel from '../app/models/Branch';
import AccessLevelModel from '../app/models/AccessLevel';
import CollaboratorModel from '../app/models/Collaborator';
import CompanyModel from '../app/models/Company';
import ProductModel from '../app/models/Product';
import LotModel from '../app/models/Lot';
import CategoryModel from '../app/models/Category';
import BelongsModel from '../app/models/Belongs';
import DecreasesModel from '../app/models/Decreases';

const models = [
  BranchModel,
  AccessLevelModel,
  CollaboratorModel,
  CompanyModel,
  ProductModel,
  LotModel,
  CategoryModel,
  BelongsModel,
  DecreasesModel,
  BranchModel,
];

class Database {
  constructor() {
    this.init();
    this.initRedisDB();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  initRedisDB() {
    this.redisClient = redis.createClient(redisConfig);
    this.redisClient.on('connect', () => {
      console.log('Redis connected!');
    });
  }
}

export default new Database();
