import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'
import './App.css';


import { findReview } from './services/api-helper'

import AgeGate from './pages/AgeGate';
import Landing from './pages/Landing';
import User from './pages/User';
import Whiskey from './pages/Whiskey';
import Home from './pages/Home';


class App extends React.Component {
  render() {
    return (

      <>
        <Switch>
          <Route exact path="/" component={AgeGate} />
          <Route path="/home" component={Home} />
          <Route path="/landing" component={Landing} />
          <Route path="/whiskey/:id" render={(props) => (
            <Whiskey
              id={props.match.params.id} />
          )} />
          <Route path="/user" render={() => (
            <User
              currentUser={{
                id: 1,
                username: "john",
                email: "john@email.com"
              }}
            />
          )} />
        </Switch>
      </>
    );
  }
}

export default App;
