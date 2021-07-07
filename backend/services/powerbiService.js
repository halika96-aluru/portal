const powerbiService = require('./powerbiEmbedService');
const reportService = require('./reportService');

exports.getEmbebToken = async (req, res) => {
    
    //req.params.reportId = 'f75d4ca3-9020-4c7a-90e0-3946ae90d564' '7779d348-1f55-4527-8594-4b1dcb9e7364';    
    let params = await reportService.getReportParams(req.params.reportId);    
    powerbiService.getEmbedInfo(params.pbiWorkspaceId, params.pbiReportId, params.reportFilters).then((result) => {
     res.send(result);
    });
};