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
   
    let user = await contex.getContext().Users.findAll({
        where: {   IsActive:{ [Op.eq]: true }, UserName: { [Op.eq]: email } }
    });
    console.log('user obj', user)
    // join  report 
    let reports = await contex.getContext().Reports.findAll({

        include: [            
            {
              model: contex.getContext().ReportAccess,   
              include: [
                {
                  model: contex.getContext().Users,   
                  where: {
                    UserId: {
                      [Op.ne]: user.Id
                    }
                  }
                }
              ]
            }
          ],       
        where: {   IsActive:{ [Op.eq]: true } }
    });
    
    console.log('reports', reports);
    return reports;
};