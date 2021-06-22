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
    return report.workspaceId;
};

exports.getReportParams = async (reportId) => {
   
    // join  report 
    let report = await contex.getContext().Reports.findOne({
        where: {   id:{ [Op.eq]: reportId } },
        include: [{ model: ReportFilters, as: 'ReportFilters'}]
    });    
    return report;
};

exports.getReports = async () => {
   
    // join  report 
    let reports = await contex.getContext().Reports.findAll({
        where: {   isActive:{ [Op.eq]: true } }
    }); 
    return reports;
};

exports.getReportsByuser = async (email) => {
   try {
    let user = await contex.getContext().Users.findOne({
        where: {   isActive:{ [Op.eq]: true }, UserName: { [Op.eq]: email } }
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
        where: { isActive:{ [Op.eq]: true },  [Op.or]: [{userId:  user.userId}]   }
    });

    let reportsList = reports.map(c => c.Report);
    
    console.log('reports', reports);
    return reportsList;
  } catch(e){
    console.log(e);
  }

};