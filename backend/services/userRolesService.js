var contex = require("./sequalize.service");
const { Op } = require("sequelize");

exports.getUserRoles = async () => {
    
    let userroles = await contex.getContext().accessLevel.findAll({
        where: {   isActive:{ [Op.eq]: true } }       
    });
    console.log("items dept", userroles);
    return userroles;
};