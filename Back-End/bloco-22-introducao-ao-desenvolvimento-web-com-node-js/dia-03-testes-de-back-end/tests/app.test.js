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
  it('retorna a string "neutro" para numero igual a 0', () => {
    const result = sortingNumber(0);
    expect(result).to.be.equal('neutro');
  })
  it('retorna a string "negativo" para numero menor que 0', () => {
    const result = sortingNumber(-7);
    expect(result).to.be.equal('negativo');
  })
  it('retorna a string "o valor deve ser um número" quando for passado um valor que não seja do type number', () => {
    const result = sortingNumber('7');
    expect(result).to.be.equal('o valor deve ser um número');
  })
})