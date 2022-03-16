const { expect } = require('chai');
const sortingNumber = require('../index');

describe('Testa o funcionamento da função sortingNumber', () => {
  it('Verifica se existe a função sortingNumber', () => {
    expect(sortingNumber).to.be.a('function');
  })
})