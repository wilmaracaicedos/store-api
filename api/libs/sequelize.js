const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.mysqlUser);
const PASSWORD = encodeURIComponent(config.mysqlPassword);
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URI = `mysql://${USER}:${PASSWORD}@${config.mysqlHost}:${config.mysqlPort}/${config.mysqlDatabase}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: console.log,
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
