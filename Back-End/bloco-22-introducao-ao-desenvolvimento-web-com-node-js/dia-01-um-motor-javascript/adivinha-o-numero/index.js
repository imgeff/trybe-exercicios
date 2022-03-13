const { dataUser } = require('./inputs/userInput');
const whatIsNumber = require('./app/whatIsNumber');

const main = () => {
  do {
    whatIsNumber()
  } while (dataUser.playAgain === true);
}

main();
