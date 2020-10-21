import Sequelize, { Model } from 'sequelize';

class LotModel extends Model {
  static init(connection) {
    super.init(
      {
        idLot: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
          },
          idProduct: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          idCollaborator: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          entryDate: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          dueDate: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          productQty: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          description: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          purchasePrice: {
            type: Sequelize.FLOAT,
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
      { sequelize: connection, tableName: 'lots' }
    );
    return this;
  }
}

export default LotModel;
