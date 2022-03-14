const userVm =  require('./app/userVM');

const VM = () => {
  console.log('Calcular velocidade média')
  userVm();
}

VM();

module.exports = VM;
