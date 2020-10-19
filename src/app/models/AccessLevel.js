import Sequelize, { Model } from 'sequelize';

class AccessLevelModel extends Model {
  static init(connection) {
    super.init(
      {
        idAccessLevel: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      { sequelize: connection, tableName: 'access_levels' }
    );
    return this;
  }
}

export default AccessLevelModel;
