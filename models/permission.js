'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    title: DataTypes.STRING
  }, {});
  Permission.associate = function(models) {
    // associations can be defined here
  };
  return Permission;
};