const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('approvalMaster', {
    approvalId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'approval_id'
    },
    approvalUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'approval_user_id'
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
    tableName: 'Approval_master',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Approval_master",
        unique: true,
        fields: [
          { name: "approval_id" },
        ]
      },
    ]
  });
};
