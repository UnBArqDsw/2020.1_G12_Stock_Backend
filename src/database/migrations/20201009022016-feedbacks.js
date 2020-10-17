'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('feedbacks', {
      idFeedback: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      idFeedbackType: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'feedback_types',
          key: 'idFeedbackType',
        },
      },
      idCollaborator: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'collaborators',
          key: 'idCollaborator',
        },
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      annex: {
        type: Sequelize.STRING(8000),
        allowNull: true,
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
    await queryInterface.dropTable('feedbacks');
  },
};
