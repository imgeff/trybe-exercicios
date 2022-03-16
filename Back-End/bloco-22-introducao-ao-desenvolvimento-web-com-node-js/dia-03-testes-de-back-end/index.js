const sortingNumber = (value) => {
  if (value > 0) return 'positivo';
  if (value === 0) return 'neutro'
  if (value < 0) return 'negativo'
}

module.exports = sortingNumber;