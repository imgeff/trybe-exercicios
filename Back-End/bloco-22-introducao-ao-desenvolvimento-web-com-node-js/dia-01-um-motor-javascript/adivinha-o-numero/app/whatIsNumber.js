const { dataUser, whatNumber, playAgain } = require('../inputs/userInput');
const randomNumber = require('../services/randomNumber');

const startGame = () => {
  whatNumber();
  console.log(randomNumber(dataUser.number));
  playAgain();
}

module.exports = startGame;