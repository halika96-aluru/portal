const powerbiService = require('../services/powerbiEmbedService');
const reportService = require('../services/reportService');

exports.getEmbebToken = (req, res) => {
    let params = reportService.getReportParams(req.params.reportId)
    powerbiService.getEmbedInfo(req.params.workspaceId, req.params.reportId).then((result) => {
        res.status(201).send({id: result._id});
    });
};