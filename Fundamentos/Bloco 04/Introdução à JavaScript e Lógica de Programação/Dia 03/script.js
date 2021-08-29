// exexrcício 1
let n = 5;
let line = "";
let simbol = "*";


// for (let index = 0; index < n; index += 1) { // Repete o código abaixo 5 vezes, no caso ele adicinará 5 simbols em line
//     line = line + simbol;
// }
// for (let index = 0; index < n; index += 1) { // Repete o console.log 5 vezes mas agora linha é composto por 5 simbols
//     console.log(line)
// }


//  exercício 2
// for (index = 1; index <= n; index += 1) {
//     line = simbol + line;
//     console.log(line)
// }


// exercício 3

// let positionSimbol = n;
// for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     for (colIndex = 1; colIndex <= n; colIndex += 1) {
//         if (colIndex >= positionSimbol) {
//             line = line + simbol;

//         } else {
//             line = " " + line
//         }
//     }
//     console.log(line)
//     positionSimbol -= 1
//     line = ""
// }

//  exercício 4
// let positionSimbol = n
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     for (let colIndex = 1; colIndex <= n; colIndex += 1) {
//         if (colIndex <= positionSimbol) {
//             line = line + simbol + " ";
//         } else {
//             line = " " + line
//         }
//     }
//     console.log(line)
//     positionSimbol -= 2;
//     line = "";
// }