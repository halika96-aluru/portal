const Sequelize = require('sequelize');
//
// Database Setup
//
function getContext(){

const sequelize = new Sequelize('PortalDB', 'PortalAdmin', 'Portal@123', {
    host: 'rcoedemodb.database.windows.net',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
        }
    }
  });
try {
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);    
  });
}catch(e){
  throw e;
}
var initModels = require("../models/init-models");

var contex = initModels(sequelize);
return contex;
}

exports.getContext = getContext;