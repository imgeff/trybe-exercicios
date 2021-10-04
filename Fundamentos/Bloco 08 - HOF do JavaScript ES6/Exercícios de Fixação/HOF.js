const wakeUp = () => 'Acordando!!'
const coffee = () => 'Bora Tomar Café!!'
const sleep = () => 'Partiu Dormir!!'

const doingThings = (func) => func
console.log(doingThings(wakeUp()));
console.log(doingThings(coffee()));
console.log(doingThings(sleep()));
