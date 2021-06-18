var contex = require("./sequalize.service");
var ReportFilters = contex.getContext().ReportFilters;
const { Op } = require("sequelize");

exports.getWorkspaceByReportId = async (reportId) => {
    let keys = Object.keys(model);
    let report = await contex.getContext().Constants.findAll({
        where: {
            reportId:reportId
    }
    });
    console.log('******************************************');
    return report.workspaceId;
};

exports.getReportParams = async (reportId) => {
   
    // join  report 
    let report = await contex.getContext().Reports.findOne({
        where: {   Id:{ [Op.eq]: reportId } },
        include: [{ model: ReportFilters, as: 'ReportFilters'}]
    });

    console.log('******************************************', report);
    return report;
};

exports.getReports = async () => {
   
    // join  report 
    let reports = await contex.getContext().Reports.findAll({
        where: {   IsActive:{ [Op.eq]: true } }
    });

    console.log('reports', reports);
    return reports;
};

exports.getReportsByuser = async (email) => {
   try {
    let user = await contex.getContext().Users.findOne({
        where: {   IsActive:{ [Op.eq]: true }, UserName: { [Op.eq]: email } }
    });
    var ReportAccess = require('../models/ReportAccess');
    console.log('user obj', user)
    // join  report 
    let reports = await contex.getContext().ReportAccess.findAll({

        include: [            
            {
              model: contex.getContext().Reports,
              as: 'Report',
              require: true   
            }
          ],       
        where: { IsActive:{ [Op.eq]: true },  [Op.or]: [{UserId:  user.UserId}]   }
    });

    let reportsList = reports.map(c => c.Report);
    
    console.log('reports', reports);
    return reportsList;
  } catch(e){
    console.log(e);
  }

};