const express = require('express');
const ping = require('./middlewares/ping');
const hello = require('./middlewares/hello');
const greeting = require('./middlewares/greeting');
const getSimpsons = require('./middlewares/getSimpsons');
const getSimpsonById = require('./middlewares/getSimpsonById');
const createSimpson = require('./middlewares/createSimpson');

const app =  express();

const PORT = 3000;

app.use(express.json());

app.get('/ping', ping);

app.get('/simpsons', getSimpsons);

app.get('/simpsons/:id', getSimpsonById);

app.post('/hello', hello);

app.post('/greeting', greeting);

app.post('/simpsons', createSimpson);

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});