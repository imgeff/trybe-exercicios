const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: "imgeff",
  host: "localhost",
  password: "Imgeff1822*",
});

module.exports = connection;