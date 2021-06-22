const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupAdmin', {
    groupAdminId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'group_admin_id'
    },
    userGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_group_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    limitToUserGroup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'limit_to_user_group'
    },
    isEnableToCrtUserGroups: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_enable_to_crt_user_groups'
    },
    isEnableToCrtUserRoles: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_enable_to_crt_user_roles'
    },
    isEnableToAddNewReport: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_enable_to_add_new_report'
    },
    isAbleToReportRequestAccess: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_able_to_report_request_access'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_active'
    },
    createdBy: {
      type: DataTypes.STRING(256),
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
      type: DataTypes.STRING(256),
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
    tableName: 'group_admin',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_group_admin",
        unique: true,
        fields: [
          { name: "group_admin_id" },
        ]
      },
    ]
  });
};
