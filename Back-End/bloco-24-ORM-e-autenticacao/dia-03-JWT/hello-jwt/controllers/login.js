const jwt = require('jsonwebtoken');

// eslint-disable-next-line no-unused-expressions
require('dotenv').config;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const secret = process.env.SECRET;

const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || username.length < 5 || !password || password.length < 5) {
    return res.status(401).json({ message: 'username e password são obrigatórios' });
  }
  const token = jwt.sign({ username, admin: false }, secret, jwtConfig);
  return res.status(200).json({ token });
};

module.exports = login;