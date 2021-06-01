var contex = require("./sequalize.service").contex;
var ReportFilters = contex.ReportFilters;
const { Op } = require("sequelize");

exports.getWorkspaceByReportId = async (reportId) => {
    let keys = Object.keys(model);
    let report = await contex.Constants.findAll({
        where: {
            reportId:reportId
    }
    });
    console.log('******************************************');
    return report.workspaceId;
};

exports.getReportParams = async (reportId) => {
   
    // join  report 
    let report = await contex.Reports.findOne({
        where: {   Id:{ [Op.eq]: reportId } },
        include: [{ model: ReportFilters, as: 'ReportFilters'}]
    });

    console.log('******************************************', report);
    return report;
};