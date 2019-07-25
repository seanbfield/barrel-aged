import React from 'react';
import { withRouter } from 'react-router-dom';

import logo from '../assets/graphics/logomark.png'
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'FIRST',
    }
  }
  handleClick = (ev) => {
    let active = this.state.active;
    let newActive = active === 'FIRST' ? 'SECOND' : 'FIRST';
    this.setState({
      active: newActive
    });
  }
  render() {
    return (
      <div className="page home-page gradient-background">
        <div className="home-hero">
          <img src={logo} alt="Barrel-Aged Logomark" />
          <div>
            {/* SB - Toggle Form */}
            {(this.state.active === 'FIRST') && <LoginForm
              {...this.props}
            />}
            {(this.state.active === 'SECOND') && <RegisterForm
              {...this.props}
            />}
            {/* MK/SB - Toggle button */}
            {(this.state.active === 'FIRST') ?
              <button type="button" onClick={this.handleClick} className="toggle-button smooth">
                Register
            </button> : <button type="button" onClick={this.handleClick} className="toggle-button smooth">
                Login
            </button>
            }
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Home)