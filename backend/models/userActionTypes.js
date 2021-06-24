const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userActionTypes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    actionName: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'action_name'
    },
    actionDesc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'action_desc'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_active'
    },
    createdBy: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('suser_sname'),
      field: 'created_by'
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getutcdate'),
      field: 'created_date'
    },
    modifiedBy: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('suser_sname'),
      field: 'modified_by'
    },
    modifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getutcdate'),
      field: 'modified_date'
    }
  }, {
    sequelize,
    tableName: 'User_action_types',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_User_action_types",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
