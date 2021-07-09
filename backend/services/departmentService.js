var contex = require("./sequalize.service");
const { Op, QueryTypes } = require("sequelize");


exports.getDepartments = async (req, res) => {
    
    contex.sequelize.query(`
    select ds.department_id as departmentId, 
    ds.department_name departmentName, 
    ds.department_description departmentDescription,
    ds.department_prefix departmentPrefix, 
    ds.created_date createdDate,
     STRING_AGG (us.username, ',') AS admins 
    from department_admin da
    join Departments ds on da.department_id = ds.department_id  
    join Users us on da.user_id =  us.user_id
    group by ds.department_id, 
    ds.department_name , 
    ds.department_description,
    ds.department_prefix, 
    ds.created_date
    `, { type: QueryTypes.SELECT }).then((result) => {
        res.send(result);
    }); ;
              
    // let departments = await contex.getContext().departments.findAll({
    //     where: {   isActive:{ [Op.eq]: true } }       
    // }).then((result) => {
    //     res.send(result);
    //    });       
};

exports.addDepartment = async (req, res) => {
    

    let departments = await contex.getContext().departments.create({
        departmentName:req.body.departmentName,
        departmentPrefix: req.body.departmentPrefix,
        departmentDescription: req.body.departmentDescription,
        isActive: true
    }).then((result) => {
        res.send(result);
       });       
};