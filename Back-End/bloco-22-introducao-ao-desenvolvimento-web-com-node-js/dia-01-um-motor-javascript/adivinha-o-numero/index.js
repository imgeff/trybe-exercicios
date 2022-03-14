const { dataUser } = require('./inputs/userInput');
const whatIsNumber = require('./app/whatIsNumber');

const adivinhaONumero = () => {
  console.log('Jogo de adivinhação');
  do {
    whatIsNumber()
  } while (dataUser.playAgain === true);
}

adivinhaONumero();

module.exports = adivinhaONumero;
