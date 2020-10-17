'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('lots', {
      idLot: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      idProduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'idProduct',
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
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('lots');
  },
};
