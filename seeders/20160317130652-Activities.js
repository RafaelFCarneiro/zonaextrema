'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Activities', [
            {
                "id": 1,
                "user_id": 1,
                "kind_id": 1,
                "description": "#86kg",
                "secret": true,
                "createdAt": "2016-03-10T17:33:22.201Z",
                "updatedAt": "2016-03-10T17:33:22.201Z"
            },
            {
                "id": 2,
                "user_id": 1,
                "kind_id": 2,
                "description": "#bacon #pork #lowcard #lchf",
                "secret": true,
                "createdAt": "2016-03-10T17:33:22.201Z",
                "updatedAt": "2016-03-10T17:33:22.201Z"
            }
        ]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Activities', null, {});
    }
};
