import Sequelize, { Model } from 'sequelize';

class BelongsModel extends Model {
  static init(connection) {
    super.init(
      {
        idCategory: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          references: {
            model: 'categories',
            key: 'idCategory',
          },
        },
        idProduct: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          references: {
            model: 'products',
            key: 'idProduct',
          },
        },
        nameCategory: {
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
      { sequelize: connection, tableName: 'belongs' }
    );
    return this;
  }
}

export default BelongsModel;
