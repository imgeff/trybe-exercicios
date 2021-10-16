// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('../exercise8');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const expectedError = new Error ('Não temos esse pokemon para você :(');
    function callback(error) {
      expect(error).toEqual(expectedError);
      done()
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const expectedString = 'Olá, seu pokemon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';
    const callback =  (error,result) => { 
      expect(result).toEqual(expectedString);
      done();
    };

    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasaur', callback);
  });
});