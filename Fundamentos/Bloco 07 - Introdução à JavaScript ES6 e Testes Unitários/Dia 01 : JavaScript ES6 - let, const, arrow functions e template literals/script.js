// exercício 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
oddsAndEvens.sort((a, b) => a - b)
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
// Parte 2

const factorialNUmber = (n) => {
  let factor = 1;
  for (let index = n; index > 0; index -= 1) {
    (index > 0) ? factor = factor * index : factor;
  }
  console.log(factor);
}
factorialNUmber(4)

const biggerWord = (frase) => {
  let bigWord = '0';
  const arrayWord = frase.split(' ');
  for (let index = 0; index < arrayWord.length; index += 1) {
    const word = arrayWord[index];
    (word.length >= bigWord.length) ? bigWord = word : bigWord = bigWord;
  }
  return bigWord
}
biggerWord("Antônio foi no banheiro e não sabemos o que aconteceu")

const buttonClick = document.querySelector('button');
const campCount = document.querySelector('strong');
let clickCount = 0;
buttonClick.addEventListener('click', () => campCount.innerText = clickCount += 1)

const subsWord = (string) => {
  const stringDefault = "Tryber x aqui!".split(' ');
  for (let index = 0; index < stringDefault.length; index += 1) {
    (stringDefault[index] === 'x') ? stringDefault[index] = string : stringDefault[index];
  }
  return stringDefault.join()
}

subsWord("Bebeto");