import React from 'react';
import { Link } from 'react-router-dom';

const AgeGate = () => {
  return (
    <div>
      <h2>By clicking here, I certify that I am at least 21 years of age.</h2>
      <Link to='/home'>Enter Site</Link>
    </div>
  )
}

export default AgeGate;