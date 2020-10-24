import Sequelize, { Model } from 'sequelize';

class DecreasesTypeModel extends Model {
  static init(connection) {
    super.init(
      {
        idDecreasesType: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      { sequelize: connection, tableName: 'decreases_types' }
    );
    return this;
  }
}

export default DecreasesTypeModel;
