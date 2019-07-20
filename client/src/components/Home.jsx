import React from 'react';
import { Route, Link } from 'react-router-dom';

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
  render() {
    return (
      <div>
        <nav>

        </nav>
        <p>This is our homepage</p>

      </div>
    )
  }
}
export default Home