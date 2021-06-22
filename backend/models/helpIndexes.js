const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('helpIndexes', {
    helpIndexId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'help_index_id'
    },
    helpSectionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'help_section',
        key: 'help_section_id'
      },
      field: 'help_section_id'
    },
    title: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    helpContent: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'help_content'
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
    tableName: 'help_indexes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_help_indexes",
        unique: true,
        fields: [
          { name: "help_index_id" },
        ]
      },
    ]
  });
};
