const sum = require('./script');

describe('Função sum', () => {
  it('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9)
  })
})