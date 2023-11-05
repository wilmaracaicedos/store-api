require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
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

  dbUrl: process.env.DATABASE_URL,
  dbUrlMigration: process.env.DATABASE_URL_MIGRATION,

  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,

  smtpEmail: process.env.SMTP_EMAIL,
  smtpPassword: process.env.SMTP_PASSWORD,
  smtpTo: process.env.SMTP_TO,
  smtpSecret: process.env.SMTP_SECRET,
}

module.exports = { config };
