const reportService = require('../services/reportService');
// const graphService =  require('../services/graphService');

exports.getReports = async (req, res) => {          
    reportService.getReports().then((result) => {
     res.status(200).send(result);
    });
};

exports.getUserReports = async (req, res) => {          
  
    req.params.email = "ajay@powerbiaxes.onmicrosoft.com";
    reportService.getReportsByuser(req.params.email).then((result) => {
     res.status(200).send(result);
    });
};

