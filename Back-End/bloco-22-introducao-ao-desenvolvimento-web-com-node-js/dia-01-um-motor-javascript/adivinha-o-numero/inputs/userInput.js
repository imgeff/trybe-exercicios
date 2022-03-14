const { questionInt, question }  = require('readline-sync');

const dataUser = {
  number: null,
  playAgain: false,
}


const whatNumber = () => dataUser.number = questionInt('Qual é o número? ');

const playAgain = () => {
  const play =  question('Deseja jogar novamente? ')
  if(play === 'sim' || play === 'SIM' || play === 'Sim' || play === 'S' || play === 's') {
    dataUser.playAgain =  true;
  } else {
    dataUser.playAgain = false;
  }
}

module.exports = {
  dataUser,
  whatNumber,
  playAgain,
}
