import React from 'react';

import { withRouter, Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import logo from '../assets/graphics/logomark.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
  };

  logOut = (props) => {
    localStorage.clear();
    this.props.history.push('/home');
  };

  render() {
    return (
      <div className="header">
        <Link to="/landing">
          <img src={logo} alt="Pandappers Panda Logo"></img>
        </Link>
        <Link to="/user">dashboard</Link>
        <Link to="/landing">whiskeys</Link>
        <Link to="#">news</Link>
        <Link to="#">contact</Link>
        <button onClick={this.logOut}>Log Out</button>
      </div>
    )
  }
}

export default withRouter(Header);