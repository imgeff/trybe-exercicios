// ./index.ts

import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Losango de diagonal maior 32cm e diagonal menor 18cm: ${Exercise.losangle(32, 18)}cm²`);
console.log(`Losango de diagonal maior 200cm e diagonal menor 50cm: ${Exercise.losangle(200, 50)}cm²`);
console.log(`Losango de diagonal maior 75cm e diagonal menor 25cm: ${Exercise.losangle(75, 25)}cm²`);

console.log(`Trapézio de Base maior 100cm e Base menor 70cm e Altura 50cm: ${Exercise.trapeze(100, 70, 50)}cm²`);
console.log(`Trapézio de Base maior 75cm e Base menor 50cm e Altura 35cm: ${Exercise.trapeze(75, 50, 35)}cm²`);
console.log(`Trapézio de Base maior 150cm e Base menor 120cm e Altura 80cm: ${Exercise.trapeze(150, 120, 80)}cm²`);

console.log(`Círculo de Área 25cm: ${Exercise.circle(25)}cm²`);
console.log(`Círculo de Área 100cm: ${Exercise.circle(100)}cm²`);
console.log(`Círculo de Área 12.5cm: ${Exercise.circle(12.5)}cm²`);