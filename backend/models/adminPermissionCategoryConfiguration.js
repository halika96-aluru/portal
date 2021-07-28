const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adminPermissionCategoryConfiguration', {
    adminPermissionCategoryConfigurationId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'admin_permission_category_configuration_id'
    },
    adminRoleTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'admin_role_type_id'
    },
    adminPermissionCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'admin_permission_category_id'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
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
    tableName: 'admin_permission_category_configuration',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_admin_permission_category_configuration_id",
        unique: true,
        fields: [
          { name: "admin_permission_category_configuration_id" },
        ]
      },
    ]
  });
};
