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
            <li><Link to="/user" className="smooth">dashboard</Link></li>
            <li><Link to="/landing" className="smooth">whiskeys</Link></li>
            <li><Link to="/news" className="smooth">news</Link></li>
            <li><Link to="/contact" className="smooth">contact</Link></li>
            <li><Link onClick={this.logOut} className="smooth" id="log-out">Log Out</Link></li>
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
