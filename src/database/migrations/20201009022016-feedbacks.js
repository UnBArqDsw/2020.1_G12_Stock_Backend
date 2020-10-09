'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('feedbacks', { 
      idFeedback:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      idFeedbackType:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'feedback_types',
          key: 'idFeedbackType'
        }
      },
      idCollaborator:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'collaborators',
          key: 'idCollaborator'
        }
      },
      description:{
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      annex: {
        type: Sequelize.STRING(8000),
        allowNull: true,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('feedbacks');
  }
};
