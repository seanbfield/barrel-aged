import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/graphics/logomark.png'

class AgeGate extends React.Component {
  state = {
    resizeNotifier: () => { },
  }


  render() {
    // const videoOptions = {
    //   src: '',
    //   autoPlay: true,
    //   loop: true,
    //   muted: true
    // };
    // const style = {
    //   width: '150vw',
    //   height: '150vh',
    //   position: 'fixed',
    //   margin: 'auto',
    //   top: '-25vh',
    //   left: '-25vw',
    //   zIndex: -2,
    // };


    return (
      <div className="page age-gate-page">
        <img src={logo} width="40%" className="app-logo" alt="Barrel-Aged Logomark" />
        <div className="hero gate-hero">
          <div>
            <Link to='https://www.google.com'><button>Exit Site</button></Link>
            <div>
              <h2>You must be 21 years of age or older to enter this website.</h2>
              <p><em>By entering this site, you agree to this and other terms, as stated in our <Link to="#">Terms of Use.</Link></em></p>
            </div>
            <Link to='/home'><button>Enter Site</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default AgeGate;