'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Activities', [

        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Activities', null, {});
    }
};
