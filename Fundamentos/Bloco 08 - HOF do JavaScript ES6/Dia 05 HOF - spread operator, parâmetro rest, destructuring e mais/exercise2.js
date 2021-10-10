// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos
// escreva sum abaixo
const sum = (...numbers) => numbers.reduce((acumulator, currentNumber) => acumulator + currentNumber)
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4, 5))