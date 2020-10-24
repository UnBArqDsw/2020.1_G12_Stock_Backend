import Sequelize, { Model } from 'sequelize';

class ProductModel extends Model {
  static init(connection) {
    super.init(
      {
        idProduct: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        idCompany: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'companies',
            key: 'idCompany',
          },
        },
        idCollaborator: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'collaborators',
            key: 'idCollaborator',
          },
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        unitQtd: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        unitMeasure: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        salePrice: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
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
      { sequelize: connection, tableName: 'products' }
    );
    return this;
  }
}

export default ProductModel;
