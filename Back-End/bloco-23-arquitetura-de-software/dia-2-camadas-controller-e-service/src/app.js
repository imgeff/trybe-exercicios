const express = require('express');
const ping = require('./controller/ping.controller');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/ping', ping);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));