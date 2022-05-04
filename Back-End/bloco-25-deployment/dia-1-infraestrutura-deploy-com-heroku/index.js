const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.status(200).send('Está vivo!!!')
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

