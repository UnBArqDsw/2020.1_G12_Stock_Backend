import Sequelize, { Model } from 'sequelize';

class BranchModel extends Model {
  static init(connection) {
    super.init(
      {
        idBranch: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      { sequelize: connection, tableName: 'branches' }
    );

    return this;
  }
}

export default BranchModel;
