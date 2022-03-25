const { getUsers } = require('../model/user')

const getAllUsers = async (req, res) => {
  const allUsers = await getUsers();
  return res.status(200).json(allUsers);
}

module.exports = getAllUsers;