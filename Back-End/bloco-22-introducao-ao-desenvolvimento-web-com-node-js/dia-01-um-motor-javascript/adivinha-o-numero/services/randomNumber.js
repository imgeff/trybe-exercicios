let pontuation = 0;

const scorePlay = (userNumber, number) => number === userNumber ? pontuation += 1 : pontuation;

const randomNumber = (userNumber) => {
  const number = Math.round(Math.random() * 10);
  scorePlay(userNumber, number);
  const sucessAnswer = `Parabéns, número correto, sua pontuação é de ${pontuation} pontos!`;
  const failAnswer = `Opa, não foi dessa vez. O número era ${number}, sua pontuação é de ${pontuation} pontos`;
  const result = number === userNumber ? sucessAnswer : failAnswer;
  return result;
}

module.exports = randomNumber;
