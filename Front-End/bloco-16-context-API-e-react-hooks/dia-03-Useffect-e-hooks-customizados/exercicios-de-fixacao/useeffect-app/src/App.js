import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(''); 
  const [second, setSecond] = useState(0);
  const [win, setWin] = useState(false);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const ONE_SECOND = 1000;
  const FOUR_SECOND = 4000;
  const TEN_SECOND = 10000;
  const MAX_NUMBER = 100;
  const MIN_NUMBER = 1;

  useEffect(() => {
    setTimeout(() => {
      const randomNumber = getRandomInt(MIN_NUMBER, MAX_NUMBER);

      if(randomNumber % 3 === 0 || randomNumber % 5 === 0) {
        setWin(true);

        setTimeout(() => {
          setWin(false);
        }, FOUR_SECOND)

      } else {
        setWin(false);
      }
      
      setNumber(randomNumber);
    }, TEN_SECOND)
  }, [number])

  useEffect(() => {
    setTimeout(() => {
      second === 10 ? setSecond(1) : setSecond( second + 1 );
    }, ONE_SECOND)
  }, [second])
  


  return (
    <div className='App'>
      <h1>Second: { second }</h1>
      <h2>{ number }</h2>
      {win === true && <h2>Acerto</h2>}
    </div>
  );
}

export default App;
