const connection = require('./mysql-connection');

const create = async (firstName, lastName, email, password) => {
  const insert = `INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES(?, ?, ?, ?)`;
  await connection.execute(insert, [firstName, lastName, email, password])
  return {
    firstName, 
    lastName, 
    email, 
    password,
  }
}

const getUsers = async () => {
  const selectAll = `SELECT * FROM users_crud.users`;
  const [users] = await connection.execute(selectAll);
  return users;
}

module.exports = {
  create,
  getUsers,
};