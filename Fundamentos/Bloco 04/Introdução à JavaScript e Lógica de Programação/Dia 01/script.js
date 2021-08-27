// exercício 1
// const a = 22;
// const b = 18;

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)

// exercício 2
// const num1 = 7;
// const num2 = 5;

// if (num1 > num2) {
//     console.log(num1)
// } else {
//     console.log(num2)
// }

// exercício 3
// const num1 = 3;
// const num2 = 6;
// const num3 = 2;

// if (num1 > num2 && num1 > num3) {
//     console.log(num1)
// } else if (num2 > num1 && num2 > num3) {
//     console.log(num2)
// } else {
//     console.log(num3)
// }

// exercício 4
// const numberAleatory = -5;

// if (numberAleatory > 0) {
//     console.log("positive")
// } else if (numberAleatory < 0) {
//     console.log("negative")
// } else {
//     console.log("zero")
// }

// exercício 5
// const ang1 = 90;
// const ang2 = 90;
// const ang3 = -180;

// if (ang1 + ang2 + ang3 === 180) {
//     console.log(true)
// } else if (ang1 || ang2 || ang3 < 0) {
//     console.log("ERRO")
// } else {
//     console.log(false)
// }

// exercício 6
// let peça = "Rainha"

// switch (peça.toLowerCase()) {
//     case "rainha":
//         console.log("A rainha pode se mover para qualquer direção do tabuleiro")
//         break
//     case "bispo":
//         console.log("O bispo só pode se mover em diagonal")
//         break;
//     case "peão":
//         console.log("O peão só pode se mover para frente e uma casa em diagonal quando eliminar uma peça do adversário ")

//     default:
//         console.log("erro")
//         break;
// }

//exercício 7 

// const notaDada = 222;
// if (notaDada < 0 || notaDada > 100) {
//     console.log("Erro, nota Inválida")
// } else if (notaDada >= 90) {
//     console.log("A")
// } else if (notaDada >= 80) {
//     console.log("B")
// } else if (notaDada >= 70) {
//     console.log("C")
// } else if (notaDada >= 60) {
//     console.log("D")
// } else if (notaDada >= 50) {
//     console.log("E")
// } else {
//     console.log("F")
// }

// exercício 8
// const oito = 8;
// const cinco = 5;
// const sete = 7;

// if (oito % 2 === 0) {
//     console.log(true)
// } else if (cinco % 2 === 0) {
//     console.log(true)
// } else if (sete % 2 === 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// exercício 9
// const oito = 8;
// const cinco = 5;
// const sete = 7;

// if (oito % 2 !== 0) {
//     console.log(true)
// } else if (cinco % 2 !== 0) {
//     console.log(true)
// } else if (sete % 2 !== 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// exercício 10
// let custoProduto = 50;
// let vendaProduto = 100;

// if (custoProduto >= 0 && vendaProduto >= 0) {
//     let imposto = 20 / 100 * custoProduto;
//     let valorCustoTotal = custoProduto + imposto;
//     let lucro = (vendaProduto - valorCustoTotal) * 1000;
//     console.log(lucro)


// } else {
//     console.log("Erro, valor Inválido")
// }

// exercício 11 
const salarioBruto = 3000.00;

if (salarioBruto <= 1903.98) {

    let aliINSS = (8 / 100) * salarioBruto;
    let salarioLiquido = salarioBruto - aliINSS;
    console.log(salarioLiquido)

} else if (salarioBruto > 1903.98 && salarioBruto < 2826.65) {

    aliINSS = (9 / 100) * salarioBruto;
    let salarioBase = salarioBruto - aliINSS;
    let impostoIR = (7.5 / 100) * salarioBase + 142.80;
    let salarioLiquido = salarioBase - impostoIR
    console.log(salarioLiquido)


} else if (salarioBruto > 2826.65 && salarioBruto < 3751.05) {

    aliINSS = (11 / 100) * salarioBruto;
    let salarioBase = salarioBruto - aliINSS;
    let impostoIR = (15 / 100) * salarioBase + 354.80;
    let salarioLiquido = salarioBase - impostoIR
    console.log(salarioLiquido)

} else if (salarioBruto > 3751.05 && salarioBruto < 4664.68) {

    aliINSS = (11 / 100) * salarioBruto;
    let salarioBase = salarioBruto - aliINSS;
    let impostoIR = (22.5 / 100) * salarioBase + 636.13;
    let salarioLiquido = salarioBase - impostoIR
    console.log(salarioLiquido)

} else if (salarioBruto > 4664.68) {

    aliINSS = (11 / 100) * salarioBruto;
    let salarioBase = salarioBruto - aliINSS;
    let impostoIR = (27.5 / 100) * salarioBase + 869.36;
    let salarioLiquido = salarioBase - impostoIR
    console.log(salarioLiquido)

}