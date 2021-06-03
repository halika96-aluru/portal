var contex = require("./sequalize.service").contex;
const { Op } = require("sequelize");

exports.getUsers = async () => {
   
    // join  report 
    let users = await contex.Users.findAll({
        where: {   IsActive:{ [Op.eq]: true } }       
    });
    console.log("items users", users);
    return users;
};