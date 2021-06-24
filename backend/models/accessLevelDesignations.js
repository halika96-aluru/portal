const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accessLevelDesignations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accessLevelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'AccessLevel',
        key: 'access_level_id'
      },
      field: 'access_level_id'
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Departments',
        key: 'department_id'
      },
      field: 'department_id'
    },
    designationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'designation_id'
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
    tableName: 'AccessLevelDesignations',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AccessLevelDesignations",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
