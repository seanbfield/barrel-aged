import React from 'react';
import { fetchWhiskey, findWhiskeyReviews } from '../services/api-helper';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whiskeys: [],
    };
  };

  componentDidMount = async () => {
    const whiskeys = await fetchWhiskey();
    this.setState({
      whiskeys: whiskeys,
    })
  };


  render() {
    return (
      <div id="whiskey-list">
        <h2>Featured whiskeys:</h2>
        {this.state.whiskeys.map(whiskey => (
          <div key={whiskey.id}>
            <h3>{whiskey.name}</h3>
            {/* <p>Rating: {() => this.aggRatings(whiskey.id)}</p> */}
            <p>{whiskey.brand}</p>
            <p>{whiskey.type}</p>
            <p>{whiskey.description}</p>
            {whiskey.urlToImage && <img src={whiskey.urlToImage} />}
          </div>
        ))}
      </div>
    )
  }
}

export default Landing;