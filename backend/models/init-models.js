var DataTypes = require("sequelize").DataTypes;
var _accessLevel = require("./accessLevel");
var _accessLevelDesignations = require("./accessLevelDesignations");
var _adminTypes = require("./adminTypes");
var _approvalMaster = require("./approvalMaster");
var _constants = require("./constants");
var _departments = require("./departments");
var _feedback = require("./feedback");
var _groupMembers = require("./groupMembers");
var _reportAccess = require("./reportAccess");
var _reportCategory = require("./reportCategory");
var _reportFilters = require("./reportFilters");
var _reportMoreInfo = require("./reportMoreInfo");
var _reportRequests = require("./reportRequests");
var _reportSubscription = require("./reportSubscription");
var _reportSubscriptionLogs = require("./reportSubscriptionLogs");
var _reports = require("./reports");
var _testTable = require("./testTable");
var _userGroups = require("./userGroups");
var _userActionTypes = require("./userActionTypes");
var _userActions = require("./userActions");
var _users = require("./users");
var _departmentAdmin = require("./departmentAdmin");
var _feedbackTopics = require("./feedbackTopics");
var _groupAdmin = require("./groupAdmin");
var _helpIndexes = require("./helpIndexes");
var _helpSection = require("./helpSection");

function initModels(sequelize) {
  var accessLevel = _accessLevel(sequelize, DataTypes);
  var accessLevelDesignations = _accessLevelDesignations(sequelize, DataTypes);
  var adminTypes = _adminTypes(sequelize, DataTypes);
  var approvalMaster = _approvalMaster(sequelize, DataTypes);
  var constants = _constants(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var feedback = _feedback(sequelize, DataTypes);
  var groupMembers = _groupMembers(sequelize, DataTypes);
  var reportAccess = _reportAccess(sequelize, DataTypes);
  var reportCategory = _reportCategory(sequelize, DataTypes);
  var reportFilters = _reportFilters(sequelize, DataTypes);
  var reportMoreInfo = _reportMoreInfo(sequelize, DataTypes);
  var reportRequests = _reportRequests(sequelize, DataTypes);
  var reportSubscription = _reportSubscription(sequelize, DataTypes);
  var reportSubscriptionLogs = _reportSubscriptionLogs(sequelize, DataTypes);
  var reports = _reports(sequelize, DataTypes);
  var testTable = _testTable(sequelize, DataTypes);
  var userGroups = _userGroups(sequelize, DataTypes);
  var userActionTypes = _userActionTypes(sequelize, DataTypes);
  var userActions = _userActions(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var departmentAdmin = _departmentAdmin(sequelize, DataTypes);
  var feedbackTopics = _feedbackTopics(sequelize, DataTypes);
  var groupAdmin = _groupAdmin(sequelize, DataTypes);
  var helpIndexes = _helpIndexes(sequelize, DataTypes);
  var helpSection = _helpSection(sequelize, DataTypes);

  accessLevelDesignations.belongsTo(accessLevel, { as: "accessLevel", foreignKey: "accessLevelId"});
  accessLevel.hasMany(accessLevelDesignations, { as: "accessLevelDesignations", foreignKey: "accessLevelId"});
  accessLevelDesignations.belongsTo(departments, { as: "department", foreignKey: "departmentId"});
  departments.hasMany(accessLevelDesignations, { as: "accessLevelDesignations", foreignKey: "departmentId"});
  feedback.belongsTo(departments, { as: "department", foreignKey: "departmentId"});
  departments.hasMany(feedback, { as: "feedbacks", foreignKey: "departmentId"});
  reportAccess.belongsTo(departments, { as: "department", foreignKey: "departmentId"});
  departments.hasMany(reportAccess, { as: "reportAccesses", foreignKey: "departmentId"});
  reportCategory.belongsTo(departments, { as: "department", foreignKey: "departmentId"});
  departments.hasMany(reportCategory, { as: "reportCategories", foreignKey: "departmentId"});
  reports.belongsTo(departments, { as: "department", foreignKey: "departmentId"});
  departments.hasMany(reports, { as: "reports", foreignKey: "departmentId"});
  userGroups.belongsTo(departments, { as: "dept", foreignKey: "deptId"});
  departments.hasMany(userGroups, { as: "userGroups", foreignKey: "deptId"});
  users.belongsTo(departments, { as: "department", foreignKey: "departmentId"});
  departments.hasMany(users, { as: "users", foreignKey: "departmentId"});
  reports.belongsTo(reportCategory, { as: "category", foreignKey: "categoryId"});
  reportCategory.hasMany(reports, { as: "reports", foreignKey: "categoryId"});
  reportSubscriptionLogs.belongsTo(reportSubscription, { as: "reportSubscription", foreignKey: "reportSubscriptionId"});
  reportSubscription.hasMany(reportSubscriptionLogs, { as: "reportSubscriptionLogs", foreignKey: "reportSubscriptionId"});
  approvalMaster.belongsTo(reports, { as: "report", foreignKey: "reportId"});
  reports.hasMany(approvalMaster, { as: "approvalMasters", foreignKey: "reportId"});
  reportAccess.belongsTo(reports, { as: "report", foreignKey: "reportId"});
  reports.hasMany(reportAccess, { as: "reportAccesses", foreignKey: "reportId"});
  reportFilters.belongsTo(reports, { as: "report", foreignKey: "reportId"});
  reports.hasMany(reportFilters, { as: "reportFilters", foreignKey: "reportId"});
  reportMoreInfo.belongsTo(reports, { as: "report", foreignKey: "reportId"});
  reports.hasMany(reportMoreInfo, { as: "reportMoreInfos", foreignKey: "reportId"});
  reportRequests.belongsTo(reports, { as: "report", foreignKey: "reportId"});
  reports.hasMany(reportRequests, { as: "reportRequests", foreignKey: "reportId"});
  reportSubscription.belongsTo(reports, { as: "report", foreignKey: "reportId"});
  reports.hasMany(reportSubscription, { as: "reportSubscriptions", foreignKey: "reportId"});
  userActions.belongsTo(reports, { as: "report", foreignKey: "reportId"});
  reports.hasMany(userActions, { as: "userActions", foreignKey: "reportId"});
  groupMembers.belongsTo(userGroups, { as: "userGroup", foreignKey: "userGroupId"});
  userGroups.hasMany(groupMembers, { as: "groupMembers", foreignKey: "userGroupId"});
  reportAccess.belongsTo(userGroups, { as: "team", foreignKey: "teamId"});
  userGroups.hasMany(reportAccess, { as: "reportAccesses", foreignKey: "teamId"});
  userActions.belongsTo(userActionTypes, { as: "actionTypeUserActionType", foreignKey: "actionType"});
  userActionTypes.hasMany(userActions, { as: "userActions", foreignKey: "actionType"});
  groupMembers.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(groupMembers, { as: "groupMembers", foreignKey: "userId"});
  reportAccess.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(reportAccess, { as: "reportAccesses", foreignKey: "userId"});
  reportSubscription.belongsTo(users, { as: "useridEmailUser", foreignKey: "useridEmail"});
  users.hasMany(reportSubscription, { as: "reportSubscriptions", foreignKey: "useridEmail"});
  helpIndexes.belongsTo(helpSection, { as: "helpSection", foreignKey: "helpSectionId"});
  helpSection.hasMany(helpIndexes, { as: "helpIndices", foreignKey: "helpSectionId"});

  return {
    accessLevel,
    accessLevelDesignations,
    adminTypes,
    approvalMaster,
    constants,
    departments,
    feedback,
    groupMembers,
    reportAccess,
    reportCategory,
    reportFilters,
    reportMoreInfo,
    reportRequests,
    reportSubscription,
    reportSubscriptionLogs,
    reports,
    testTable,
    userGroups,
    userActionTypes,
    userActions,
    users,
    departmentAdmin,
    feedbackTopics,
    groupAdmin,
    helpIndexes,
    helpSection,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
