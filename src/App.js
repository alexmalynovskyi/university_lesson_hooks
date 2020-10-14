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

const reducer = (state, payload) => {
  console.log('state: ', state);
  console.log('payload: ', payload);
  switch(payload.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state ,count: 0 };
    default:
      return state;
  }
}

function App() {
  // const [counter, setCounter] = useState({
  //   counter: 0
  // });
  const [counter1, setCounter1] = useState(0);
  const [counter, dispatch] = useReducer(reducer,  initialState); // under the hood -> useState

  useEffect(() => {
    console.log('enter useEffect');
    const interval = setInterval(() => {
      console.log('setInteval');
    }, 1000 * 2)

    clearInterval(interval);
    
    const cleanUp = () => {
      clearInterval(interval);
    }
    return cleanUp;
  }, [counter])
  
  // const handleClick = (type) => {
  //   if (type === 'increment') {
  //     setCounter((prevCounter) => ({ counter: prevCounter.counter + 1 }));
  //   } else if (type === 'decrement') {
  //     setCounter((prevCounter) => ({ counter: prevCounter.counter - 1 }));
  //   }
  // }

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: INCREMENT })}>
        click to increment value
      </button>
      <br/>
      <button onClick={() => dispatch({ type: DECREMENT })}>
        click to decrement value
      </button> 
      <br/>
      <button onClick={() => dispatch({ type: RESET })}>
        click to reset value
      </button> 
      <br/>
      value is {counter.count}
    </div>
  );
}

export default App;
