const sortingNumber = (value) => {
  if (typeof value !== 'number') return 'o valor deve ser um número';
  if (value > 0) return 'positivo';
  if (value === 0) return 'neutro'
  if (value < 0) return 'negativo'
}

module.exports = sortingNumber;