const reportService = require('../services/reportService');

exports.getReports = async (req, res) => {      
    console.log('request header', req.headers['authorization']);
    reportService.getReports().then((result) => {
     res.status(200).send(result);
    });
};