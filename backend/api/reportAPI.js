const reportService = require('../services/reportService');
const graphService =  require('../services/graphService');

exports.getReports = async (req, res) => {      
    console.log('request header', req.headers['authorization']);
    reportService.getReports().then((result) => {
     res.status(200).send(result);
    });
};

exports.getUserReports = async (req, res) => {      
    console.log('request header', req.headers['authorization']);
    let authHeader = req.headers['authorization'].split(' ');
    if (authHeader[0] !== 'Bearer') {
        return res.status(401).send();
    } 
    user = graphService.getUserDetailsByToken(authHeader[1]);
    reportService.getReports(user.email).then((result) => {
     res.status(200).send(result);
    });
};

