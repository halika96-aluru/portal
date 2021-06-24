const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupMembers', {
    groupMemberId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'group_member_id'
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
    userGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'UserGroups',
        key: 'user_group_id'
      },
      field: 'user_group_Id'
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
    tableName: 'GroupMembers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GroupMembers",
        unique: true,
        fields: [
          { name: "group_member_id" },
        ]
      },
    ]
  });
};
