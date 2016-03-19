'use strict';
module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define('Activity', {
    secret: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "users",
            key: "id"
        }
    },
    kind_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "kinds",
            key: "id"
        }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Activity;
};