const express = require('express');

const app = express();
const TEXT = process.env.TEXT;

app.get('/', (req, res) => {
  return res.status(200).send(`${TEXT}!!!`)
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

