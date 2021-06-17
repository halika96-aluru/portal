const userService = require('../services/usersService');

exports.getUsers = async (req, res) => {    
    userService.getUsers().then((result) => {
     res.status(result.status).send(result);
    });
};


exports.addUser = async (req, res) => {    

    // verify user exist



    // graph api result     
    let userInfo = await graphService.getUserDetails(req.params.email);
   
    userService.addUser(req.params.email, userInfo).then((result) => {
     res.send(result);
    });
};