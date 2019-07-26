import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import MobileMenu from './MobileMenu'

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
            <li className="smooth"><Link to="/user">dashboard</Link></li>
            <li className="smooth"><Link to="/landing">whiskeys</Link></li>
            <li className="smooth"><Link to="#">news</Link></li>
            <li className="smooth"><Link to="#">contact</Link></li>
            <li className="smooth"><Link onClick={this.logOut}>Log Out</Link></li>
          </ul>
          <div className="mobile-menu" >
            <MobileMenu />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);