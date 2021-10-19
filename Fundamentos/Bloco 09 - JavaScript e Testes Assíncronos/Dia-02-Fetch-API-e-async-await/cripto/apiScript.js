const API_URL_CRIPTO = `https://api.coincap.io/v2/assets`;

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

function fetchAPI() {
  fetch(API_URL_CRIPTO, myObject)
  .then((response) => response.json())
  .then((data) => {
    const ul = document.querySelector('ul');
    const arrayCripto = data.data.filter((coin, index) => index < 10)
    arrayCripto.map((coin) => {
      const li = document.createElement('li');
      li.innerText = `${coin.id} (${coin.symbol}): ${parseFloat(coin.priceUsd).toPrecision(7)}`
      ul.appendChild(li);
    })
  })
}

window.onload = () => fetchAPI();