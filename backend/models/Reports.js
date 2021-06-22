const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reports', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pbiReportId: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'pbi_report_id'
    },
    reportName: {
      type: DataTypes.STRING(512),
      allowNull: false,
      field: 'report_name'
    },
    pbiReportAppId: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'pbi_report_app_id'
    },
    reportPrefix: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'report_prefix'
    },
    pbiWorkspaceId: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'pbi_workspace_id'
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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ReportCategory',
        key: 'category_id'
      },
      field: 'category_id'
    },
    reportDescription: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'report_description'
    },
    reportType: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "1 --> powerBI  2 ---> Cognos",
      field: 'report_type'
    },
    cognosLink: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'cognos_link'
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hasDataLevelSecurity: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'has_data_level_security'
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
    tableName: 'Reports',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Reports",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
