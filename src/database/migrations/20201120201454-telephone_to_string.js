'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('companies', 'telephone', { 
      type: Sequelize.STRING(11),
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('companies', 'telephone', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  }
};
