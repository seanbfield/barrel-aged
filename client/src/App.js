import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'
import './App.css';


import { userSignup, userLogin } from './services/api-helper'

import AgeGate from './pages/AgeGate';
import Landing from './pages/Landing';
import User from './pages/User';
import Whiskey from './pages/Whiskey';
import Home from './pages/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'login',
      loginFormData: {
        user: '',
        name: '',
        password: '',
      },
      registerFormData: {
        user: '',
        email: '',
        password: '',
      }
    }
  }


  // SB - Handle Register Form Change
  handleRegisterFormChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      }
    }));
  }

  // SB - Registration Submit

  handleRegisterSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const user = await userSignup(this.state.registerFormData);
      console.log(user);
      this.setState({
        registerForm: {
          user: '',
          password: '',
          email: ''
        },
        currentUser: user,
        currentView: 'landing'
      });
      this.props.history.push('/landing')
    } catch (e) {
      console.log(e)
    }
  }


  // SB - Handle Login Change

  handleLoginFormChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value,
      },
    }));
  }

  // SB - Handle Login Submit


  handleLoginSubmit = async (ev) => {
    ev.preventDefault();
    const user = await userLogin(this.state.loginFormData);
    console.log(user);
    this.setState({
      loginFormData: {
        email: '',
        password: '',
      },
      currentUser: user,
      currentView: 'landing'
    })
    console.log(user);
  }

  async componentDidMount() {
    const data = await axios.get('http://localhost:3000/users');
    console.log(data);
  }


  render() {
    return (

      <>
        <Switch>
          <Route exact path="/" component={AgeGate} />
          <Route path="/home" render={() => (
            <Home
              registerForm={this.state.registerFormData}
              handleSubmit={this.handleRegisterSubmit}
              handleChange={this.handleRegisterFormChange}

              loginForm={this.state.loginFormData}
              handleSubmit={this.handleLoginSubmit}
              handleChange={this.handleLoginFormChange}
            />

          )} />
          <Route path="/landing" component={Landing} />
          <Route path="/whiskey" component={Whiskey} />
          <Route path="/user" component={User} />
        </Switch>
      </>
    );
  }
}

export default App;
