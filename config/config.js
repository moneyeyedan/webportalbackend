const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  "development": {
    "username": process.env.DB_USER_NAME,
    "password": process.env.DB_SECRET,
    "database": process.env.DB,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USER_NAME,
    "password": process.env.DB_SECRET,
    "database": process.env.DB,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USER_NAME,
    "password": process.env.DB_SECRET,
    "database": process.env.DB,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
}
