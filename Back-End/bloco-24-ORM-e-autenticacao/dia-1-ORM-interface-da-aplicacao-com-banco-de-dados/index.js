const express = require('express');
const { getAll } = require('./controllers/bookController');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/books', getAll);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
})