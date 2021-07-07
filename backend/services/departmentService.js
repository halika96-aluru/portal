var contex = require("./sequalize.service");
const { Op } = require("sequelize");


exports.getDepartments = async (req, res) => {
    
    let departments = await contex.getContext().departments.findAll({
        where: {   isActive:{ [Op.eq]: true } }       
    }).then((result) => {
        res.send(result);
       });       
};