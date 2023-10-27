require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,

  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbHostMigration: process.env.DB_HOST_MIGRATION,

  mysqlUser: process.env.MYSQL_USER,
  mysqlPassword: process.env.MYSQL_PASSWORD,
  mysqlHost: process.env.MYSQL_HOST,
  mysqlDatabase: process.env.MYSQL_DATABASE,
  mysqlPort: process.env.MYSQL_PORT,
}

module.exports = { config };
