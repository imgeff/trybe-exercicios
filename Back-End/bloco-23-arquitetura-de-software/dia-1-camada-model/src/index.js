const express =  require('express');
const createUser = require('./middlewares/createUser');
const app = express();

const PORT = 3001;

app.use(express.json());

app.post('/user', createUser);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));