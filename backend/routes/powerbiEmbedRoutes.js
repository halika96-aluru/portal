//const UsersController = require('./controllers/users.controller');
// const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
//const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
// const config = require('../common/config/env.config');
const powerbiService = require('../services/powerbiService');
const express = require("express");
const router = express.Router();

router.get('/getEmbedToken/:reportId', [
    // ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    powerbiService.getEmbebToken

]);

module.exports = router;
