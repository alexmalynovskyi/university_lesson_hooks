import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  useEffect(() => {
    console.log('enter useEffect');
    const interval = setInterval(() => {
      console.log('setInteval');
    }, 1000 * 2)

    
    
    const cleanUp = () => {
      clearInterval(interval);
    }
    return cleanUp;
  }, [counter])
  
  const handleClick = (type) => {
    if (type === 'increment') {
      setCounter(() => counter + 1);
    } else if (type === 'decrement') {
      setCounter(() => counter - 1);
    }
  }

  return (
    <div className="App">
      <button onClick={() => handleClick('increment')}>
        click to increment value
      </button>
      
      <button onClick={() => handleClick('decrement')}>
        click to decrement value
      </button> 

      value is {counter}
    </div>
  );
}

export default App;
