const feedbackService = require('../services/feedbackService');
const reportService = require('../services/reportService');

exports.getFeedbacks= async (req, res) => {
    
    //req.params.reportId = 'f75d4ca3-9020-4c7a-90e0-3946ae90d564' '7779d348-1f55-4527-8594-4b1dcb9e7364';    
    // let params = await reportService.getReportParams(req.params.reportId);
    // console.log(params);
    feedbackService.getFeedbacks().then((result) => {
     res.status(result.status).send(result);
    });
};