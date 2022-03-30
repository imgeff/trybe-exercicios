const express = require('express');
const productRouter = require('./routes/productRouter');
require('dotenv').config();

const PORT = process.env.MYSQL_PORT;
const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});