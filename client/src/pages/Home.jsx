import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { ping, userSignup } from '../services/api-helper'
import Header from '../components/Header'
import axios from 'axios'

import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import ReviewForm from '../components/ReviewForm';

import AgeGate from './AgeGate';
import Landing from './Landing';
import User from './User';
import Whiskey from './Whiskey';

class Home extends React.Component {
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

  async componentDidMount() {
    const data = await axios.get('http://localhost:3000/users');
    console.log(data);
  }

  render() {
    return (
      <div>
        <Header />
        <>
          <RegisterForm
            registerForm={this.state.registerFormData}
            handleSubmit={this.handleRegisterSubmit}
            handleChange={this.handleRegisterFormChange}
          />
        </>

      </div>
    )
  }
}
export default withRouter(Home)