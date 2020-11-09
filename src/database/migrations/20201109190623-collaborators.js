'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('collaborators', 'activate', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('collaborators', 'activate', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    });
  },
};


