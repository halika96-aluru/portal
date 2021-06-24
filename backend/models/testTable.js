const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testTable', {
    username: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    password: {
      type: DataTypes.CHAR(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Test_table',
    schema: 'dbo',
    timestamps: false
  });
};
