const calcVM = require('../services/calcVM');
const { dataUser, inputs } =  require('../appetizer/userEntry');

const userVm = () => {
  inputs();
  const VM = calcVM(dataUser.distance, dataUser.time);
  console.log(`A velocidade média para percorrer ${dataUser.distance}Km em ${dataUser.time}h é ${VM} m/s!`);
}

module.exports = userVm;
