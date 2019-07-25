import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/graphics/wordmark-light.png'

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


      <div className="App">
        <header className="App-header">

          <img src={logo} width="40%" className="App-logo" alt="logo" />
          <div>
            <h2>By clicking here, I certify that I am at least 21 years of age.</h2>
            <Link to='/home'>Enter Site</Link>
          </div>
        </header>
      </div>
    )
  }
}

export default AgeGate;