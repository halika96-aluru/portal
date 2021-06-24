const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reportAccess', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Reports',
        key: 'id'
      },
      field: 'report_id'
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Departments',
        key: 'department_id'
      },
      field: 'department_id'
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserGroups',
        key: 'user_group_id'
      },
      field: 'team_id'
    },
    accessLevelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'access_level_id'
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id'
      },
      field: 'user_id'
    },
    isShare: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_share'
    },
    isSubscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_subscribe'
    },
    isExportPdf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_export_pdf'
    },
    isExportExcel: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_export_excel'
    },
    isScreenShot: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_screen_shot'
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
    tableName: 'ReportAccess',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportAccess",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
