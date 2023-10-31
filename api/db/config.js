const { config } = require('../config/config');

module.exports = {
  development: {
    url: config.dbUrlMigration,
    dialect: 'postgres',
  },
  production: {
    url: config.dbUrl,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    },
  }
}
