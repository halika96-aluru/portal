const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reportFilters', {
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
    filterKey: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'filter_key'
    },
    filterValue: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'filter_value'
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
    tableName: 'ReportFilters',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ReportFilters",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
