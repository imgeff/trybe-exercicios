const {questionInt} = require('readline-sync');

const dataUser = {
  distance: null,
  time: null,
}

const inputs = () => {
  dataUser.distance = questionInt('Qual é a distância? ');
  dataUser.time = questionInt('Qual foi o tempo? ');
}

module.exports =  {
  dataUser,
  inputs,
}
