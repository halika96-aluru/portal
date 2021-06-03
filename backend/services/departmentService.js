var contex = require("./sequalize.service").contex;
const { Op } = require("sequelize");

exports.getDepartments = async () => {
    
    let departments = await contex.Departments.findAll({
        where: {   IsActive:{ [Op.eq]: true } }       
    });
    console.log("items dept", departments);
    return departments;
};