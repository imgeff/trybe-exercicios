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
// Exercpício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontuation = (gabarite, answers, check) => {
  return check(gabarite, answers);
}

const result = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
  let nota = 0;
  for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
    if (RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]) {
      nota += 1;
    } else if (STUDENT_ANSWERS[index] === 'N.A') {
      nota = nota;
    } else if (RIGHT_ANSWERS[index] !== STUDENT_ANSWERS[index]) {
      nota -= 0.5;
    }
  }
  return nota;
}
console.log(pontuation(RIGHT_ANSWERS, STUDENT_ANSWERS, result));
