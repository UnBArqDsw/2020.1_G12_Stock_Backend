import Sequelize, { Model } from 'sequelize';

class DecreasesModel extends Model {
  static init(connection) {
    super.init(
      {
        idCollaborator: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'collaborators',
            key: 'idCollaborator',
          },
          primaryKey: true,
        },
        idLot: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'lots',
            key: 'idLot',
          },
          primaryKey: true,
        },
        idDecreasesType: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'decreases_types',
            key: 'idDecreasesType',
          },
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        date: {
          type: Sequelize.DATE,
          allowNull: false,
          primaryKey: true,
        },
        time: {
          type: Sequelize.TIME,
          allowNull: false,
          primaryKey: true,
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
      { sequelize: connection, tableName: 'decreases' }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.LotModel, {
      foreignKey: 'idLot',
      as: 'lot',
    });

    this.belongsTo(models.CollaboratorModel, {
      foreignKey: 'idCollaborator',
      as: 'collaborator',
    });
  }
}

export default DecreasesModel;
