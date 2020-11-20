import Sequelize, { Model } from 'sequelize';

class CategoryModel extends Model {
  static init(connection) {
    super.init(
      {
        idCategory: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        idCompany: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'companies',
            key: 'idCompany',
          },
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING(1000),
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
      { sequelize: connection, tableName: 'categories' }
    );
    return this;
  }
}

export default CategoryModel;
