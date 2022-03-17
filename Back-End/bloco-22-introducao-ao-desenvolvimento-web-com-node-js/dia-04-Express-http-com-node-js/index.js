const express = require('express');

const app = express();

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' }
  );
})

app.listen(3000, () => console.log('aplicação rodando na porta 3000'))