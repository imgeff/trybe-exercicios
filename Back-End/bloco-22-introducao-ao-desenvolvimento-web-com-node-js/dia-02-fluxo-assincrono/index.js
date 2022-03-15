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
