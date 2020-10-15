'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('collaborators', {
      idCollaborator: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      idAccessLevel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'access_levels',
          key: 'idAccessLevel'
        }
      },
      idCompany: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'companies',
          key: 'idCompany'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      document: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      passsword: {
        type: Sequelize.STRING,
        allowNull: false
      },
      photo: {
        type: Sequelize.STRING(8000),
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('collaborators')
  }
}
