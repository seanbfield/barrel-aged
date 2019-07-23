import React from 'react';
import { Link } from 'react-router-dom';
import glass from '../assets/images/glass.png'

const AgeGate = () => {
  return (

    <div className="App">
      <header className="App-header">

        <img src={glass} width="200px" height="200px" className="App-logo" alt="logo" />
        <p>
          Welcome to Barrel-Aged React!
    </p>
      </header>
      <div>
        <h2>By clicking here, I certify that I am at least 21 years of age.</h2>
        <Link to='/home'>Enter Site</Link>
      </div>
    </div>
  )
}

export default AgeGate;