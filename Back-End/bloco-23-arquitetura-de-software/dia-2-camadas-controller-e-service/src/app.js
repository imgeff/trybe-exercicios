const express = require('express');
const ping = require('./controllers/ping.controller');
const { getCepController } = require('./controllers/cep.controller');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/ping', ping);

app.get('/cep/:cep', getCepController);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));