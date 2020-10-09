'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('belongs', { 
      idCategory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'categories',
          key: 'idCategory'
        }
      },
      idProduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'products',
          key: 'idProduct'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('belongs');
  }
};
