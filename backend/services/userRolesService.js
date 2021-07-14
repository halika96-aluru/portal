var contex = require("./sequalize.service");
const { Op } = require("sequelize");

exports.getUserRoles =async (req, res) => {
    
    contex.getContext().accessLevel.findAll({
        where: {   isActive:{ [Op.eq]: true } }       
    }).then((result) => 
    { res.send(result);
});
};

exports.addUserRole = async (req, res) => {


    contex.getContext().accessLevel.create({
        accessLevelName: req.body.accessLevelName,       
        description: req.body.departmentDescription,
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
        { where: { departmentId: req.params.accessLevelId } }
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
    contex.getContext().departments.update(
        req.body,
        { where: { departmentId: req.body.accessLevelId } }
    ).then(result => {
            res.send(result);
        }
        )
        .error(err => {
            res.staus(500).send(err);
        }
        )
};