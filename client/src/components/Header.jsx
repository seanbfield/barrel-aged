//Include in pages after login

import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

function Header() {
  const props = useSpring({ opacity: 2, from: { opacity: 0 } })
  return <animated.div style={props}>
    <div className="header">
      <Link to="/"><h1>Barrel Aged</h1></Link>
      <Link to="/landing">whiskey list</Link>
      <Link to="/whiskey">whiskey</Link>
      <Link to="/user">my profile</Link>
      <Link to="/home">registration</Link>
    </div>
  </animated.div>



}

export default Header