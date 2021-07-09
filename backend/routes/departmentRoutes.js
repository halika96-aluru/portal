//const UsersController = require('./controllers/users.controller');
// const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');
//const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
// const config = require('../common/config/env.config');
const departmentsService = require('../services/departmentService');
const express = require("express");
const router = express.Router();


router.get('/getDepartments', [
    //ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    departmentsService.getDepartments

]);

router.post('/addDepartment', [ 
    //ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    departmentsService.addDepartment

]);

module.exports = router;
