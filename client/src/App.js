import React from 'react';
import './App.css';
import glass from './/img/glass.png'
import { Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
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
}

export default App;
