'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('decreases', {
      idCollaborator: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'collaborators',
          key: 'idCollaborator',
        },
      },
      idLot: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'lots',
          key: 'idLot',
        },
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
      },
      time: {
        type: Sequelize.TIME,
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
    await queryInterface.dropTable('decreases');
  },
};
