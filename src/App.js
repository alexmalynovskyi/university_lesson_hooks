import React, { useState, useEffect, useReducer, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';

const initialState = {
  count: 0,
  score: 0
};

const initialValue = [1, 2, 3, 4];

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

  useEffect(() => {
    //
  }, [])

  console.log(`Rerender custom list item with value ${value} and key : ${index}`);
  return (
    <li key={index}>{value}</li>
  )
}

function App() {
  const [custArr, setCustArr] = useState(initialValueObjs);
  const [inputVal, setInputVal] = useState('');

  const renderArray = useMemo(() => {
    if (Array.isArray(custArr) && custArr.length > 0) {
      return <ul>{custArr.map((item, index) => (
        <CustomListItem key={item.key} index={item.key} value={item.value} />
      ))}</ul>
    } else {
      return ;
    }
  }, [custArr]);

  const handleChange = (event) => {
    const { target } = event;
    const { value } = event.target;

    console.log(target);
    setInputVal(value);
  }

  const handleClick = (event) => {
    const { target } = event;

    console.log(target);
    setCustArr((prevArr) => prevArr.concat({ value: inputVal, key: Math.random() }));
  }
  return (
    <div className="App">
    
      <br/>
      <input val={inputVal} onChange={handleChange} />
      <button onClick={handleClick}> click to add </button>
      {renderArray}
    </div>
  );
}

export default App;
