const Redux = require('redux');

// Exemplo Course
const ESTADO_INICIAL = {
  login: false,
  email: "",
  };

const fazerLogin = (email) => {
  return {
    type: "LOGIN",
    email
  }
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN": 
      return {
        ...state,
        login: !state.login,
        email: action.email
      };
    default:
      return state;
  }
}
const store = Redux.createStore(reducer);
console.log(store.getState());
store.dispatch(fazerLogin('usuario@email.com'));
console.log(store.getState());

// Declare uma store variável e atribua-a ao createStore() método, passando o reducer como um argumento.

const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);

// Use store.getState()para recuperar o state de store e atribua-o a uma nova variável currentState.

const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState();

// Declare um objeto actione atribua a ele um typeconjunto de propriedades para a string 'LOGIN'.

// Define an action here:
const action = {
  type: 'LOGIN'
}