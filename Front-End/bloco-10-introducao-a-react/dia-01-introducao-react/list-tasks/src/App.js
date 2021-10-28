import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayCompromisses = ['Escovar os Dentes', 'Tomar Café', 'Estudar']

function App() {
  return (
  arrayCompromisses.map((compromisse) => Task(compromisse))
  );
}

export default App;
