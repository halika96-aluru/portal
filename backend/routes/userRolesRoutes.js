
const userrolesService = require('../services/userrolesService');
const express = require("express");
const router = express.Router();

router.get('/getUserRoles', [    
    userrolesService.getUserRoles
]);

router.put('/updateUserRole', [ 
    //ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    userrolesService.updateUserRole

]);

router.delete('/deleteUserRole/:accessLevelId', [ 
    //ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    userrolesService.deleteUserRole

]);

router.post('/addUserRole', [ 
    //ValidationMiddleware.validJWTNeeded,
    // PermissionMiddleware.minimumPermissionLevelRequired(PAID),
    userrolesService.addUserRole

]);


module.exports = router;
