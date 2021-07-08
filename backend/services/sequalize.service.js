const Sequelize = require('sequelize');
//
// Database Setup
//
function getContext(){

const sequelize = new Sequelize('PortalDB', 'sa', 'Root@123', {
    host: '127.0.0.1',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
        }
    }
  });

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);    
  });

var initModels = require("../models/init-models");

var contex = initModels(sequelize);
return contex;
}

exports.getContext = getContext;