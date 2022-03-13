const calcIMC = (height, weight) => {
  const calcIMC = (weight / height ** 2).toFixed(2);
  return calcIMC;
}



module.exports = calcIMC;
