'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      hash: {
        type: Sequelize.TEXT
      },
      salt: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      activationKey: {
          type: Sequelize.STRING,
          allowNull: true
      },
      resetPasswordKey: {
          type: Sequelize.STRING,
          allowNull: true
      },
      verified: {
          type: Sequelize.BOOLEAN,
          allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};