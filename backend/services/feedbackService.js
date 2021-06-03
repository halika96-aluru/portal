var contex = require("./sequalize.service").contex;
const { Op } = require("sequelize");

exports.getFeedbacks = async () => {
   
    // join  report 
    let feedbacks = await contex.Feedback.findAll({
        where: {   IsActive:{ [Op.eq]: true } }       
    });
    console.log("feedbacks", feedbacks);
    return feedbacks;
};