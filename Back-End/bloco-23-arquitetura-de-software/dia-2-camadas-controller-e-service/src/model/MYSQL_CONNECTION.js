const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB_NAME,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
})

module.exports = connection;