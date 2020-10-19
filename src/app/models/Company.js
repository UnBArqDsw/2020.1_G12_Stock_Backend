import Sequelize, { Model } from 'sequelize';

class CompanyModel extends Model {
  static init(connection) {
    super.init(
      {
        idCompany: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        document: Sequelize.STRING,
        name: Sequelize.STRING,
        telephone: Sequelize.INTEGER,
        email: Sequelize.STRING,
        photo: Sequelize.STRING(80000),
        maxQtdCollaborator: Sequelize.INTEGER,
        registerDate: Sequelize.DATE,
        idBranch: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      { sequelize: connection, tableName: 'companies' }
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.BranchModel, {
      foreignKey: 'idBranch',
      as: 'Branch',
    });
  }
}

export default CompanyModel;
