import React, { useState, useEffect, useReducer, useMemo, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

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
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  //   <ThemeContext.Consumer>
  //   { value => 
  //     <button style={{ background: value.background, color: value.foreground }}>
  //       I am styled by theme context!
  //     </button>
  //   }
  // </ThemeContext.Consumer>
  );
}

export default App;
