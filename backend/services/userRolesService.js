var contex = require("./sequalize.service");
const { Op } = require("sequelize");

exports.getUserRoles =async (req, res) => {
    
    contex.getContext().accessLevel.findAll({
        where: {   isActive:{ [Op.eq]: true } }       
    }).then((result) => 
    { res.send(result);
});
};

exports.getAdminRoles =async (req, res) => {
    
    contex.getContext().adminRoles.findAll({
        where: {   isActive:{ [Op.eq]: true } }       
    }).then((result) => 
    { res.send(result);
});
};

exports.getAdminRoleTypess =async (req, res) => {
    
    contex.getContext().adminRoleTypes.findAll({
        where: {   isActive:{ [Op.eq]: true } }       
    }).then((result) => 
    { res.send(result);
});
};

exports.addUserRole = async (req, res) => {

    console.log('*********desc *****', req.body.description);
    contex.getContext().accessLevel.create({
        accessLevelName: req.body.accessLevelName,       
        description: req.body.description,
        isActive: true,
        canView: req.body.canView,
        canShare: req.body.canShare,
        canApprove: req.body.canApprove,
        canSubscribe: req.body.canSubscribe
        

    }).then((result) => {
        res.send(result);
    });
};
exports.deleteUserRole = async (req, res) => {
    contex.getContext().accessLevel.update(
        { isActive: false },
        { where: { accessLevelId: req.params.accessLevelId } }
    )
        .then(result => {
            res.send(result);
        }
        )
        .error(err => {
            res.staus(500).send(err);
        }
        )
};

exports.updateUserRole = async (req, res) => {
    console.log('*********desc *****', req.body.description);
    contex.getContext().accessLevel.update(
        req.body,
        { where: { accessLevelId: req.body.accessLevelId } }
    ).then(result => {
            res.send(result);
        }
        )
        .error(err => {
            res.staus(500).send(err);
        }
        )
};