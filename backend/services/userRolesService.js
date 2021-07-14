var contex = require("./sequalize.service");
const { Op } = require("sequelize");

exports.getUserRoles =async (req, res) => {
    
    contex.getContext().accessLevel.findAll({
        where: {   isActive:{ [Op.eq]: true } }       
    }).then((result) => 
    { res.send(result);
});
};