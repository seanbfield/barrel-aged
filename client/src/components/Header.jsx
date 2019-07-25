import React from 'react';

import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import logo from '../assets/graphics/logomark.png';

function Header() {
  const props = useSpring({ opacity: 2, from: { opacity: 0 } })
  return (
    <animated.div style={props}>
      <div className="header">
        <Link to="/">
          <img src={logo} alt="Pandappers Panda Logo"></img>
        </Link>
        <Link to="/landing">whiskey list</Link>
        <Link to="/whiskey">whiskey</Link>
        <Link to="/user">my profile</Link>
        <Link to="/home">registration</Link>
      </div>
    </animated.div>
  )
}

export default Header;