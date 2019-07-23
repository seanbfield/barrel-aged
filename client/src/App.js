import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import AgeGate from './pages/AgeGate'
import Landing from './pages/Landing'
import Home from './pages/Home'
import User from './pages/User';
import Whiskey from './pages/Whiskey';

import glass from './assets/images/glass.png'

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ReviewForm from './components/ReviewForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={glass} width="200px" height="200px" className="App-logo" alt="logo" />
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
