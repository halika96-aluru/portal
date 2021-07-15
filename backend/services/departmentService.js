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
    from Departments ds 
    left join department_admin da  on ds.department_id  =  da.department_id
    left join Users us on da.user_id =  us.user_id
    where ds.is_active = 1
    group by ds.department_id, 
    ds.department_name , 
    ds.department_description,
    ds.department_prefix, 
    ds.created_date
    `, { type: QueryTypes.SELECT }).then((result) => {
        result.forEach(element => {
            if(element.admins){
            element.admins = element.admins.split(',');
            }
        });        
        res.send(result);
    });;

    // let departments = await contex.getContext().departments.findAll({
    //     where: {   isActive:{ [Op.eq]: true } }       
    // }).then((result) => {
    //     res.send(result);
    //    });       
};

exports.addDepartment = async (req, res) => {


    contex.getContext().departments.create({
        departmentName: req.body.departmentName,
        departmentPrefix: req.body.departmentPrefix,
        departmentDescription: req.body.departmentDescription,
        isActive: true
    }).then((result) => {
        res.send(result);
    });
};
exports.deleteDepartment = async (req, res) => {
    contex.getContext().departments.update(
        { isActive: false },
        { where: { departmentId: req.params.departmentId } }
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

exports.updateDepartment = async (req, res) => {
    contex.getContext().departments.update(
        req.body,
        { where: { departmentId: req.body.departmentId } }
    ).then(result => {
            res.send(result);
        }
        )
        .error(err => {
            res.staus(500).send(err);
        }
        )
};