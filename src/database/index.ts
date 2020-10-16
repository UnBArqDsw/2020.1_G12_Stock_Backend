import Sequelize from 'sequelize'
import databaseConfig from '../config/database'
import  { Owner }  from '../models/Owner'

const models = [Owner]

class Database {
  public connection: Sequelize.Sequelize;
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize.Sequelize(databaseConfig)
    models.map(model => model.init(this.connection))
  }
}

export default new Database()

