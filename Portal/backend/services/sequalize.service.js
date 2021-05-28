//
// Database Setup
//
const Sequelize = require('sequelize');
const sequelize = new Sequelize('RFM', 'sa', 'Root@123', {
    host: 'localhost',
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

exports.contex = contex;