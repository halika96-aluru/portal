var contex = require("./sequalize.service");
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
    let keys = Object.keys(model);
    // join  report 
    let report = await contex.Constants.findAll({
        where: {
            reportId:reportId
    }
    });
    console.log('******************************************');
    return report.workspaceId;
};