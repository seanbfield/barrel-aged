import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header'


import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';



class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <>
          <RegisterForm
            {...this.props}
          />
          <LoginForm
            {...this.props}
          />
        </>
      </div>
    )
  }
}
export default withRouter(Home)