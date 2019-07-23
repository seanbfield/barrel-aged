import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import ReviewForm from '../components/ReviewForm';

import AgeGate from './AgeGate'
import Landing from './Landing'
import User from './User';
import Whiskey from './Whiskey';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      login: false
    }
  }
  handleRegister = () => {
    this.setState({
      register: true,
      login: false
    })
  }
  handleLogin = () => {
    this.setState({
      login: true,
      register: false
    })
  }

  goToUser = () => {
    this.props.history.push('/landing')
  }
  render() {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
}
export default withRouter(Home)