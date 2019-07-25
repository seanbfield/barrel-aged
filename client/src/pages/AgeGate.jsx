import React from 'react';
import { Link } from 'react-router-dom';

import Slider from '../components/Slider'
import logo from '../assets/graphics/logomark.png'



class AgeGate extends React.Component {
  render() {
    return (
      <div className="page gate-page">
        <div className="gate-hero">
          {/* <Link to='https://www.google.com'><button>Exit Site</button></Link> */}
          <div>
            <img src={logo} alt="Barrel-Aged Logomark" />
            <h1>You must be 21 years of age or older to enter this website.</h1>
            <p><em>By swiping right, you agree to this and other terms, as stated in our <Link to="#" className="light smooth">Terms of Use.</Link></em></p>
          </div>
          <Link to='/home'><button className="form-button smooth">Enter Site</button></Link>
          {/* <Slider /> */}
        </div>
      </div>
    )
  }
}

export default AgeGate;