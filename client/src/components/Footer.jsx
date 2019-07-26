import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  logOut = (props) => {
    localStorage.clear();
    this.props.history.push('/home');
  };

  render() {
    return (
      <div className="footer">
        <div id="footer-nav">
          <ul>
            <li><Link to="/user" className="smooth">dashboard</Link></li>
            <li><Link to="/landing" className="smooth">whiskeys</Link></li>
            <li><Link to="/news" className="smooth">news</Link></li>
            <li><Link to="/contact" className="smooth">contact</Link></li>
            <li><Link onClick={this.logOut} className="smooth" id="log-out">Log Out</Link></li>
          </ul>
        </div>
        <div id="footer-copyright">
          <p><em>This page was developed for the P3 Project of the General Assembly Software Engineering Immersive Panda's Cohort. For more, view our <a href="/contact">Contact</a> page.</em></p>
        </div>
      </div>
    )
  }
}