import React from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios'
import './App.css';

import { findReview } from './services/api-helper'

import AgeGate from './pages/AgeGate'
import Landing from './pages/Landing'
import User from './pages/User';
import Whiskey from './pages/Whiskey';
import Home from './pages/Home'

import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ReviewForm from './components/RegisterForm';

import glass from './assets/images/glass.png'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to='/home'>Verify Age</Link>
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
