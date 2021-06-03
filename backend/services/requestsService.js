var contex = require("./sequalize.service").contex;

exports.getReportRequests = async () => {
   
    // join  report 
    let requests = await contex.ReportRequests.findAll({
        where: {   IsActive:{ [Op.eq]: true } }       
    });
    console.log("Report requests", requests);
    return requests;
};