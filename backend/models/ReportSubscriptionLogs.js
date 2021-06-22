const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reportSubscriptionLogs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reportSubscriptionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ReportSubscription',
        key: 'report_subscription_id'
      },
      field: 'report_subscription_id'
    },
    generatedTime: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'generated_time'
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
    tableName: 'ReportSubscriptionLogs',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportSubscriptionLogs",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
