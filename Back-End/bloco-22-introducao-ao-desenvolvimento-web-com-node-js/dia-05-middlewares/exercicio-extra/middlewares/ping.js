const ping = (_req, res) => {
  res.status(200).send('pong');
  // next();
}

module.exports = ping;