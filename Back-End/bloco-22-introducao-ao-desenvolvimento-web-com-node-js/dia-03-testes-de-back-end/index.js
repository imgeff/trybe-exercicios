const fs = require('fs');

const sortingNumber = (value) => {
  if (typeof value !== 'number') return 'o valor deve ser um número';
  if (value > 0) return 'positivo';
  if (value === 0) return 'neutro'
  if (value < 0) return 'negativo'
}

const writeInFile = (nameFile, textFile) => {
  let message;
  fs.writeFileSync(nameFile, textFile, 'utf-8', (err) => {
    if(err) throw err;
  });
  return 'ok';
}

module.exports = {
  sortingNumber,
  writeInFile,
};