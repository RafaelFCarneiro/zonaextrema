'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Activities', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            secret: {
                type: Sequelize.BOOLEAN
            },
            description: {
                type: Sequelize.TEXT
            },
            UserId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                    key: 'id',
                    // This declares when to check the foreign key constraint. PostgreSQL only.
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            KindId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Kinds",
                    key: 'id',
                    // This declares when to check the foreign key constraint. PostgreSQL only.
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            },
            loggedAt: {
                allowNull: false,
                type: Sequelize.DATE
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
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Activities');
    }
};