'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('messages', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      from: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      target_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      message_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      media: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('messages');
  }
};
