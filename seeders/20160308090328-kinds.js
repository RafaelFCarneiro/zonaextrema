'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Kinds', [
            {
                id: '1',
                color: '#f1c40f',
                description: 'WEIGHT',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '2',
                color: '#3498db',
                description: 'EAT',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '3',
                color: '#3D566E',
                description: 'DRINK',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '4',
                color: '#16a085',
                description: 'WORKOUT',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '5',
                color: '#e74c3c',
                description: 'HUNGRY',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '6',
                color: '#e67e22',
                description: 'SLEEP',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '7',
                color: '#7f8c8d',
                description: 'WAKEUP',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '8',
                color: '#d35400',
                description: 'SEX',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '9',
                color: '#2980b9',
                description: 'BATH',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '10',
                color: '#c0392b',
                description: 'PARTY',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '11',
                color: '#C795C1',
                description: 'READ',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '12',
                color: '#D09259',
                description: 'WRITE',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '13',
                color: '#876A9D',
                description: 'PRAY',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '14',
                color: '#64A2BC',
                description: 'MEDITATE',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '15',
                color: '#54B7B6',
                description: 'WORK',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '16',
                color: '#3FAF78',
                description: 'TRAVEL',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '17',
                color: '#33001b',
                description: 'LISTEN',
                createdAt: new Date,
                updatedAt: new Date
            },
            {
                id: '18',
                color: '#480048',
                description: 'STUDY',
                createdAt: new Date,
                updatedAt: new Date
            }

        ], {});

    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Kind', null, {});
    }
};
