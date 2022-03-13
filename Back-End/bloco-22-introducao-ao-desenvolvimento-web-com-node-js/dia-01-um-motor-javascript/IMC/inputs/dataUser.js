const { question, questionFloat } = require('readline-sync');

const data = {
  name: '',
  weight: null,
  height: null,
}

const questionsUser = () => {
  data.name = question('Qual é o seu nome? ');
  data.weight = questionFloat('Qual é o seu peso? ');
  data.height = questionFloat('Qual é a sua altura? ');
};

module.exports = {
  data,
  questionsUser,
}
