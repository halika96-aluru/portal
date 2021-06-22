const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departmentAdmin', {
    departmentAdminId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'department_admin_id'
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'department_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    limitToGroupAdmin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'limit_to_group_admin'
    },
    limitToUserGroup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'limit_to_user_group'
    },
    isEnableToCrtGroupAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_enable_to_crt_group_admin'
    },
    isEnableToCrtUserGroups: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_enable_to_crt_user_groups'
    },
    isEnableToCrtUsserRoles: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_enable_to_crt_usser_roles'
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
    tableName: 'department_admin',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AdminRolesID",
        unique: true,
        fields: [
          { name: "department_admin_id" },
        ]
      },
    ]
  });
};
