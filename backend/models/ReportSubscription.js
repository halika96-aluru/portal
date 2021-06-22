const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reportSubscription', {
    reportSubscriptionId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'report_subscription_id'
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
    useridEmail: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'user_id'
      },
      field: 'userid_email'
    },
    frequency: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    weekday: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    dateOfMonth: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'date_of_month'
    },
    sheduledTime: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'sheduled_time'
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'end_date'
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
    tableName: 'ReportSubscription',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportSubscription",
        unique: true,
        fields: [
          { name: "report_subscription_id" },
        ]
      },
    ]
  });
};
