import React from 'react';
import logo from './logo.svg';
import './App.css';
import glass from './/img/glass.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={glass} className="App-logo" alt="logo" />
        <p>
          Welcome to Barrel-Aged React!
        </p>
      </header>
    </div>
  );
}

export default App;
