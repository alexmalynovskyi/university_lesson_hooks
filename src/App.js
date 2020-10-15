import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  
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
      <br/>
      <button onClick={() => handleClick('decrement')}>
        click to decrement value
      </button> 
      <br/>
      value is {counter}
    </div>
  );
}

export default App;
