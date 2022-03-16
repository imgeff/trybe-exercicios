const { expect } = require('chai');
const sortingNumber = require('../index');

describe('Testa o funcionamento da função sortingNumber', () => {
  it('Verifica se existe a função sortingNumber', () => {
    expect(sortingNumber).to.be.a('function');
  })
  it('retorna a string "positivo" para numero maior que 0', () => {
    const result = sortingNumber(7);
    expect(result).to.be.equal('positivo');
  })
})