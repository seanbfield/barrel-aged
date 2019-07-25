import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider'
import logo from '../assets/graphics/logomark.png'
import { useSpring, animated } from 'react-spring'



function AgeGate() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <div className="page gate-page">
      <div className="hero gate-hero">
        <div>
          <animated.div style={props}>
            <img src={logo} alt="Barrel-Aged Logomark" />
            <h1>You must be 21 years of age or older to enter this website.</h1>
            <p><em>By swiping right, you agree to this and other terms, as stated in our <Link to="#" className="light">Terms of Use.</Link></em></p>
          </animated.div>
        </div>
        <Link to='/home'><button className="form-button">Enter Site</button></Link>
      </div>
    </div>
  )
}


export default AgeGate;