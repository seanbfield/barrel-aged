import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import AgeGate from './AgeGate'
import Landing from './Landing'
import User from './User';
import Whiskey from './Whiskey';

import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import ReviewForm from '../components/ReviewForm';

export default class App extends React.Component {
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
