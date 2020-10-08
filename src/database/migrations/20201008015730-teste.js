'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('testes',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        user_name: Sequelize.STRING
      })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('testes')
  }
}
