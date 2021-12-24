import Redux from "redux";

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  return state;
}

const store = Redux.createStore(reducer);

console.log(store.getState())