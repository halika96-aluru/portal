const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accessLevel', {
    accessLevelId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'access_level_id'
    },
    accessLevelName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'access_level_name'
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: true
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
    },
    canView: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'can_view'
    },
    canApprove: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'can_approve'
    },
    canShare: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'can_share'
    },
    canSubscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'can_subscribe'
    }
  }, {
    sequelize,
    tableName: 'AccessLevel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AccessLevel",
        unique: true,
        fields: [
          { name: "access_level_id" },
        ]
      },
    ]
  });
};
