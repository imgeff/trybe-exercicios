const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
describe('Exercicio 7 - test assincrono', () => {
  it ('Espera que ao passar uma string em Lowersase, recebemos de volta ela em Uppercase', (done) => {
    uppercase('test', (str) => {
      try {
      expect(str).toBe('TEST');
      done();
      } catch (error) {
      done(error)
      }
    })
  })
})