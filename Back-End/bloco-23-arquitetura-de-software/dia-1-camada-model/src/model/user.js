const connection = require('./mysql-connection');

const create = (firstName, lastName, email, password) => {
  const insert = `INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES(?, ?, ?, ?)`;
  connection.execute(insert, [firstName, lastName, email, password])
  return {
    firstName, 
    lastName, 
    email, 
    password,
  }
}

module.exports = create;