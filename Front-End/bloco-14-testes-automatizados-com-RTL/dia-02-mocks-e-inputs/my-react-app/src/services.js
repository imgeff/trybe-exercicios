
const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);
const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;
const conversorMaiusculo = (string) => string.toUpperCase();
const retornaPrimeiraLetra = (string) => string[0]; 
const concatTwoStrings = (stringA, stringB) => `${stringA}${stringB}`;
const requestDogAPI = () => {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}


module.exports = { 
  retornaNumeroAleatorio, 
  divisivelPorDois,
  conversorMaiusculo,
  retornaPrimeiraLetra,
  concatTwoStrings,
  requestDogAPI
};