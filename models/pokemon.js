'use strict';
module.exports = (sequelize, DataTypes) => {
    var pokemon = sequelize.define('pokemon', {
        name: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return pokemon;
};