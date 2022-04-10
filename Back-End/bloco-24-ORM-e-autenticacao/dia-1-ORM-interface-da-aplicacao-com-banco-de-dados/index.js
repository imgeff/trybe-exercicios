const express = require('express');
const { getAll, getById, create, update } = require('./controllers/bookController');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/books', getAll);

app.get('/books/:id', getById);

app.post('/book', create);

app.post('/book/:id', update);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
})