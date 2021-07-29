var contex = require("./sequalize.service");
const { Op, QueryTypes } = require("sequelize");

exports.getUserRoles =async (req, res) => {
    
    contex.getContext().accessLevel.findAll({
        where: {   isActive:{ [Op.eq]: true } }       
    }).then((result) => 
    { res.send(result);
});
};

exports.getAdminRoles =async (req, res) => {

    
    contex.sequelize.query(`
    SELECT ar.admin_role_id adminRoleId, ar. admin_role_name adminRoleName, ar.admin_role_description adminRoleDescription, art.admin_role_type_name roleType, count(au.user_id) assignedUsers
    FROM admin_roles ar
    left join admin_role_types art on ar.admin_role_type_id = art.admin_role_type_id
    left join admin_users au on ar.admin_role_id = au.admin_role_id
    where ar.is_active =1
    group by ar.admin_role_id, ar. admin_role_name, ar.admin_role_description, art.admin_role_type_name
    `, { type: QueryTypes.SELECT }).then((result) => {              
        res.send(result);
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