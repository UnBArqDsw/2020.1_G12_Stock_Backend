'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', { 
      idProduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      idCompany: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'companies',
          key: 'idCompany'
        }
      },
      idCollaborator: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'collaborators',
          key: 'idCollaborator'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      unitQtd: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      unitMeasure: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      salePrice: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};
