const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userActions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reportId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Reports',
        key: 'id'
      },
      field: 'report_id'
    },
    pageName: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'page_name'
    },
    actionType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'User_action_types',
        key: 'id'
      },
      field: 'action_type'
    },
    actionDesc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'action_desc'
    },
    oldValue: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'old_value'
    },
    newValue: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'new_value'
    },
    timestamp: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    userBrowserDetails: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'user_browser_details'
    },
    createdBy: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'created_by'
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_date'
    }
  }, {
    sequelize,
    tableName: 'User_actions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_User_actions",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
