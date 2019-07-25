import React from 'react';
import { Link } from 'react-router-dom';

import Slider from '../components/Slider'

import logo from '../assets/graphics/wordmark-light.png'



class AgeGate extends React.Component {
  render() {
    return (
      <div className="auth-body">
        <div className="App">
          <header className="App-header">
            <img src={logo} width="80%" className="App-logo" alt="logo" />
            <div className="age-gate-box">
              <h1 className="age-gate-h1">By swiping right, I certify that I am at least 21 years of age.</h1>
              {/* <Link to='/home'>Enter Site</Link> */}
            </div>
            <Slider />
          </header>
        </div>
      </div>
    )
  }
}

export default AgeGate;