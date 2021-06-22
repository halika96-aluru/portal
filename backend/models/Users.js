const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    userId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'user_id'
    },
    username: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: true
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
    coworkerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'coworker_id'
    },
    reportingManagerId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'reporting_manager_id'
    },
    designation: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'first_name'
    },
    lastName: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'last_name'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_active'
    },
    modifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getutcdate'),
      field: 'modified_date'
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getutcdate'),
      field: 'created_date'
    },
    modifiedBy: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('suser_sname'),
      field: 'modified_by'
    },
    createdBy: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('suser_sname'),
      field: 'created_by'
    }
  }, {
    sequelize,
    tableName: 'Users',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Users",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
