const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reportRequests', {
    reportRequestId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'report_request_id'
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
    requestedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'requested_by'
    },
    approvedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'approved_by'
    },
    comments: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    isActive: {
      type: DataTypes.SMALLINT,
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
    tableName: 'ReportRequests',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportRequests",
        unique: true,
        fields: [
          { name: "report_request_id" },
        ]
      },
    ]
  });
};
