const ping = (_req, res) => {
  const returnSucess = { message: 'pong' };
  return res.status(200).json(returnSucess);
}

module.exports = ping;