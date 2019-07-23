import React from 'react';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whiskeys: [],
    };
  };
  render() {
    return (
      <p>This is the landing page</p>
    )
  }
}

export default Landing;