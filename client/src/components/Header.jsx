import React from 'react';

import { withRouter, Link } from 'react-router-dom';

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
        <div id="header-logo">
          <Link to="/landing">
            <img src={logo} alt="Pandappers Panda Logo"></img>
          </Link>
        </div>
        <div id="header-nav">
          <ul>
            <li><Link to="/user">dashboard</Link></li>
            <li><Link to="/landing">whiskeys</Link></li>
            <li><Link to="/News">news</Link></li>
            <li><Link to="#">contact</Link></li>
            <li><Link onClick={this.logOut}>Log Out</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);