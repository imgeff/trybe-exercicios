const express = require('express');
const ping = require('./controllers/ping.controller');
const { getCEP, createCEP } = require('./controllers/cep.controller');
const { allFieldValids } = require('./middlewares/cepValidation');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/ping', ping);

app.get('/cep/:cep', getCEP);

app.post('/cep', allFieldValids, createCEP);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));