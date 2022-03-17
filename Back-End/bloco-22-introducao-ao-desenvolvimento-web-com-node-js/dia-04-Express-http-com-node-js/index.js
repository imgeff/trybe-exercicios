const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  return res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(201).json({ message: `Hello ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  const failApi = res.status(404).json({ message: 'Unauthorized' });
  const sucessApi = res.status(200).json({ message: `Hello, ${name}!`});
  if (parseInt(age) > 17) return sucessApi;
  return failApi;
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade`});
});

app.listen(3000, () => console.log('aplicação rodando na porta 3000'));