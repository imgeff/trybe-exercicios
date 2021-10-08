const sum = (a, b) => {
  if (typeof a !== Number || typeof b !== Number) {
    throw Error('Apenas Números são permitidos!');
  }
  return a + b;
}

module.exports = sum;