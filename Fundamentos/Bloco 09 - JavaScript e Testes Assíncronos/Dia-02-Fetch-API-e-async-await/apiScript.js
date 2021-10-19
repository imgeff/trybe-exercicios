// apiScript.js  
// faça a piada aparecer no DOM da sua página!   
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const objectAPI = fetch(API_URL, myObject)
  .then((response) => response.json())
  .then((data) => {
    const h2 = document.getElementById('jokeContainer');
    h2.innerText = data.joke;
  });
};

window.onload = () => fetchJoke();