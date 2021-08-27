// exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let number of numbers) {
//     console.log(number)
// }

// exercício 2
// let soma = 0;
// for (let number = 0; number < numbers.length; number += 1) {


//     soma = numbers[number] + soma
// }
// console.log(soma)

// exercício 3
// let soma = 0;
// for (let number = 0; number < numbers.length; number += 1) {

//     soma = numbers[number] + soma
//    media = soma / 10
// }
// console.log(media)

// exercício 4
// let soma = 0;
// for (let number = 0; number < numbers.length; number += 1) {

//     soma = numbers[number] + soma
//     media = soma / 10
// }

// if (media > 20) {
//     console.log("valor maior que 20")
// } else {
//     console.log("valor menor ou igual a 20")
// }

// exercício 5
// let armNumber = 0;
// for (let number = 0; number < numbers.length; number += 1) {
//     if (numbers[number] > armNumber) {
//         armNumber = numbers[number]
//     }
// }
// console.log(armNumber)

// exercício 6
// let contImpar = 0;
// for (let number = 0; number < numbers.length; number += 1) {
//     if (numbers[number] % 2 !== 0) {
//         contImpar += 1
//     }
// }
// if (contImpar > 0) {
//     console.log(contImpar)
// } else {
//     console.log("nenhum valor ímpar encontrado")
// }

// exercício 7
// let menorNumber = 0;
// for (let number = 0; number < numbers.length; number += 1) {
//     if (numbers[number] < menorNumber || menorNumber === 0) {
//         menorNumber = numbers[number]
//     }
// }
// console.log(menorNumber)

// exercício 8
// let arrNumber = [];
// for (let number = 0; number < 26; number += 1) {
//     arrNumber.push(number);
// }
// console.log(arrNumber)

// exercício 9
let arrNumber = [];
for (let number = 0; number < 26; number += 1) {
    arrNumber.push(number);
    let divisao = arrNumber[number] / 2;
    console.log(divisao)
}