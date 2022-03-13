const { data, questionsUser } = require('../inputs/dataUser');
const calcIMC  = require('./calcIMC');
const statusIMC = require('./statusIMC');


const userIMC = () => {
  questionsUser();
  const indice = calcIMC(data.height, data.weight);
  const classification = statusIMC(indice);
  console.log(`Olá ${data.name}, seu indice de massa corporal é ${indice} e você está na faixa ${classification}.`);
}

module.exports = userIMC;
