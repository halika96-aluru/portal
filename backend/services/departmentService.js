var contex = require("./sequalize.service").contex;

exports.getDepartments = async () => {
   
    // join  report 
    let departments = await contex.Departments.findAll({
        where: {   IsActive:{ [Op.eq]: true } }       
    });
    console.log("items dept", departments);
    return departments;
};