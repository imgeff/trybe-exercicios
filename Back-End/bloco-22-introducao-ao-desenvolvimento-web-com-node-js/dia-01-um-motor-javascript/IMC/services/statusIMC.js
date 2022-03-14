let stat =  null;

const statusIMC = (IMC) => {
  if ( IMC < 18.5) stat = 'Abaixo do peso (magreza)';
  if ( IMC >= 18.5 && IMC <= 24.9) stat = 'Peso normal';
  if ( IMC >= 25.0 && IMC <= 29.9) stat = 'Acima do peso (sobrepeso)';
  if ( IMC >= 30.0 && IMC <= 34.9) stat = 'Obesidade grau I ';
  if ( IMC >= 35.0 && IMC <= 39.9) stat = 'Obesidade grau II ';
  if ( IMC >= 40.0) stat = 'Obesidade grau III e IV ';
  return stat;
}

module.exports = statusIMC;
