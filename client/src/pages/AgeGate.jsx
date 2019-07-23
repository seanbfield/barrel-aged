import React from 'react';
import { Link } from 'react-router-dom';

class AgeGate extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="date">Please enter your birthdate:</label>
          <input type="date" id="date" />
        </form>
        <Link to='/home'>Enter Site</Link>
      </div>
    )
  }
}

export default AgeGate;