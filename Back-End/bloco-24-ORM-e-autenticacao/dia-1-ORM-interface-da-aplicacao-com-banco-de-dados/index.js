const express = require('express');
const { getAll, getById, create, update, destroy } = require('./controllers/bookController');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/books', getAll);

app.get('/books/:id', getById);

app.post('/book', create);

app.post('/book/:id', update);

app.delete('/book/:id', destroy);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
})