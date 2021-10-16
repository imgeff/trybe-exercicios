const pushNumber2 = (list, number) => list.push(number);

let numbers2 = [];

pushNumber2(numbers2, 1);
pushNumber2(numbers2, 2);
pushNumber2(numbers2, 3);

console.log(numbers2);

const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1),0);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000);  // O retorno é [2, 3]