const { create } = require('../model/user');

const messageError = (messageField) => {
  const message = {
    error: "true",
    message: ` O campo ${messageField}`
  }
  return message;
}

const createUser = async (req, res) => {
  const { first_name: firstName, last_name: lastName, email, password } = req.body;
  const newUser = await create(firstName, lastName, email, password);
  if (firstName === undefined) return res.status(400).json(messageError('não pode ser vazio'));
  if (lastName === undefined) return res.status(400).json(messageError('não pode ser vazio'));
  if (email === undefined) return res.status(400).json(messageError('não pode ser vazio'));
  if (password === undefined || password.length < 6) return res.status(400).json(messageError('deve ter pelo menos 6 caracteres'));
  return res.status(201).json(newUser);
}

module.exports = createUser;