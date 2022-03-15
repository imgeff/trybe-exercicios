const calcThreeValues = (value1, value2, value3) => {
  const allValues = [ value1, value2, value3 ];
  return new Promise((resolve, reject) => {
    if ( allValues.some((value) =>  typeof value !== "number")) {
      reject("Informe apenas números");
    } else {
      const result = (value1 + value2) * value3;
      result < 50 ? reject("Valor muito baixo") : resolve(result);
    }
  })
}

const randomNumberUpToHundred = () => Math.floor(Math.random() * 100 + 1);

const value1 = randomNumberUpToHundred();
const value2 = randomNumberUpToHundred();
const value3 = randomNumberUpToHundred();

async function main() {
  calcThreeValues(value1, value2, value3)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
}

main();
