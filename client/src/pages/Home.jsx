import React from 'react';
import { withRouter } from 'react-router-dom';

import logo from '../assets/graphics/logomark.png'

import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

class Home extends React.Component {

  render() {
    console.log(this.props)
    let display = ""

    if (this.props.currentView === "login") {
      display = <LoginForm
        {...this.props}
      />
    } else {
      display = <RegisterForm
        {...this.props}
      />
    }

    return (
      <div className="page home-page gradient-background">
        <div className="hero home-hero">
          <img src={logo} alt="Barrel-Aged Logomark" />
          {display}
        </div>
      </div>
    )
  }
}
export default withRouter(Home)