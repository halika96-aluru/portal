var contex = require("./sequalize.service").contex;
const { Op } = require("sequelize");

exports.getReportRequests = async () => {
   
    // join  report 
    let requests = await contex.ReportRequests.findAll({
        where: {   IsActive:{ [Op.eq]: true } }       
    });
    console.log("Report requests", requests);
    return requests;
};