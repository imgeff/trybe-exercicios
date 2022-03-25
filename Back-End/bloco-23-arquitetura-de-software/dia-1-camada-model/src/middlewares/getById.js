const { getById } = require('../model/user')

const messageError = {
  error: true,
  message: "Usuário não encontrado"
}

const getUsersById = async (req, res) => {
  const { id } = req.params;
  const userId = await getById(id);
  if (userId.length === 0) return res.status(404).json(messageError);
  return res.status(200).json(userId);
}

module.exports = getUsersById;