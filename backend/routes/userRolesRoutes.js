//const UsersController = require('./controllers/users.controller');
// const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
//const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
// const config = require('../common/config/env.config');
const userrolesService = require('../services/userrolesService');
const express = require("express");
const router = express.Router();

router.get('/getUserRoles', [
    //ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    userrolesService.getUserRoles

]);

module.exports = router;
