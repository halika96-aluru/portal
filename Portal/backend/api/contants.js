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
const { Op } = require("sequelize");

exports.fillConstants = async (model) => {
    let keys = Object.keys(model);
    let items = await contex.Constants.findAll({
        where: {
            ConstantName:{
        [Op.in]: keys
            }
    }
    });
    
    console.log('model',model,keys, items);
    items.forEach((i) => {
      model[i.ConstantName] = i.ConstantValue;
    });
    console.log('******************* after update ***********************');
    console.log('after update',model,keys, items);
    return model;
};
