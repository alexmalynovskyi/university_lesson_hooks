import React, { useState, useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';

const initialState = {
  count: 0,
  score: 0
};

const initialValueObjs = [
  {
    key: Math.random(),
    value: 1
  }, 
  {
    key: Math.random(),
    value: 2
  },
  {
    key: Math.random(),
    value: 3
  }
]

function CustomListItem({ value, index }) {
  console.log(`Rerender custom list item with value ${value} and key : ${index}`);
  return (
    <li key={index}>{value}</li>
  )
}

function App() {
  const [custArr, setCustArr] = useState(initialValueObjs);
  const [inputVal, setInputVal] = useState('');

  const renderArray = () => {
    if (Array.isArray(custArr) && custArr.length > 0) {
      return <ul>{ custArr.map((item) => (
          <CustomListItem index={item.key} value={item.value} />
        ))  }
      </ul>
    } else {
      return ;
    }
  }

  const handleChange = (event) => {
    const { value } = event.target;
    setInputVal(value);
  }

  const handleClick = (event) => {
    setCustArr((prevArr) => prevArr.concat({ value: inputVal, key: Math.random() }));
  }
  return (
    <div className="App">
    
      <br/>
      <input val={inputVal} onChange={handleChange} />
      <button onClick={handleClick}> click to add </button>
      {renderArray()}
    </div>
  );
}

export default App;
