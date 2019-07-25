import React from 'react';
import { Link } from 'react-router-dom';

import Slider from '../components/Slider'
import logo from '../assets/graphics/wordmark-light.png'



class AgeGate extends React.Component {
  render() {
    return (
      <div className="page age-gate-page">
        <div className="app-main">
          <header className="app-main-header">
            <img src={logo} width="40%" className="app-logo" alt="Barrel-Aged Logomark" />
            <div className="hero gate-hero">
              <div className="age-gate-box">
                {/* <Link to='https://www.google.com'><button>Exit Site</button></Link> */}
                <div>
                  <h1>You must be 21 years of age or older to enter this website.</h1>
                  <p className="p-white"><em>By swiping right, you agree to this and other terms, as stated in our <Link to="#">Terms of Use.</Link></em></p>
                </div>
                {/* <Link to='/home'><button>Enter Site</button></Link> */}
                <Slider />
              </div>
            </div>
          </header>
        </div>
      </div>
    )
  }
}

export default AgeGate;