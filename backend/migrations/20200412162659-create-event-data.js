'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // notifierID: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'Notifiers',
      //     key: 'id'
      //   }
      // },
      data: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      sender: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    },{
      paranoid: true,
      updatedAt: false
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EventData');
  }
};