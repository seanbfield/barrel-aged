import React from 'react';
import './App.css';
import glass from './/img/glass.png'
import AgeGate from './components/AgeGate';
import Home from './components/Home';
import User from './components/User';
import { Route, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/home'>Verify Age</Link>
          <img src={glass} className="App-logo" alt="logo" />
          <p>
            Welcome to Barrel-Aged React!
        </p>
        </header>
        <main>
          <Route exact path='/' render={() => <AgeGate />} />
          <Route path='/home' render={() => <Home />} />
          <Route path='/user' render={() => <User />} />
        </main>
      </div>
    );
  }
}

export default App;
