// Exercício 1
const cadastro = (nome) => {
  return {
    nome: nome,
    email: `${nome.toLowerCase().replace(' ', '_')}@trybe.com`,
  };
}

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(cadastro))
// Exercício 2
const numberGenerator = () => {
  return Math.round(Math.random() * 5);
}
const checkNumber = (number) => {
  let result;
  if (number === numberGenerator()) {
    result = "Parabéns você ganhou";
  } else {
    result = "Tente novamente";
  }
  return result;
}

const loteria = (aposta, check) => check(aposta);

console.log(loteria(2, checkNumber));
