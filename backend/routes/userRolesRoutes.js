
const userrolesService = require('../services/userrolesService');
const express = require("express");
const router = express.Router();

router.get('/getUserRoles', [
    
    userrolesService.getUserRoles

]);



module.exports = router;
