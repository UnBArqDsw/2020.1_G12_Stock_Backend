'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('collaborators', 'activate', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('collaborators', 'activate', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    });
  },
};
