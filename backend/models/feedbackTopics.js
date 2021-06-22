const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feedbackTopics', {
    feedbackTopicId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'feedback_topic_id'
    },
    feedbackTopicName: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'feedback_topic_name'
    },
    feedbackTopicDesc: {
      type: DataTypes.STRING(256),
      allowNull: true,
      field: 'feedback_topic_desc'
    },
    topicOwnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'topic_owner_id'
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
    tableName: 'feedback_topics',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_feedback_topics",
        unique: true,
        fields: [
          { name: "feedback_topic_id" },
        ]
      },
    ]
  });
};
