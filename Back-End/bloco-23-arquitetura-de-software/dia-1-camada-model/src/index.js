const express =  require('express');
const createUser = require('./middlewares/createUser');
const getAllUsers = require('./middlewares/getUsers');
const getById = require('./middlewares/getById');
const app = express();

const PORT = 3001;

app.use(express.json());

app.get('/user', getAllUsers);

app.get('/user/:id', getById);

app.post('/user', createUser);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));