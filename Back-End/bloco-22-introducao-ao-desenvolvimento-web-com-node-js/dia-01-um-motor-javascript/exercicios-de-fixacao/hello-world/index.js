const { question, questionInt } = require('readline-sync');

const name = question('Qual é o seu nome?');
const age = questionInt('Qual é a sua idade?');

console.log(`Hello ${name}, você tem ${age} anos!`);
