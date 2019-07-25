import React from 'react';
import { withRouter } from 'react-router-dom';

import logo from '../assets/graphics/logomark'

import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';



class Home extends React.Component {
  render() {
    return (
      <div className="page home-page">
        <img src={logo} width="40%" className="app-logo" alt="Barrel-Aged Logomark" />
        <div className="hero home-hero">
          <RegisterForm
            {...this.props}
          />
          <LoginForm
            {...this.props}
          />
          <div className="">
            <h1>Welcome to Barrel-Aged!</h1>
            <p></p>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Home)