'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('companies', {
      idCompany: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      document: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telephone: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      photo: {
        type: Sequelize.STRING(80000),
        allowNull: true,
      },
      maxQtdCollaborator: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      registerDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      idBranch: {
        type: Sequelize.INTEGER,
        references: {
          model: 'branches',
          key: 'idBranch',
        },
        allowNull: false,
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
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
    return await queryInterface.dropTable('companies');
  },
};
