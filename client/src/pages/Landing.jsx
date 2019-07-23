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
    const reviewArr = []
    const whiskeyReviews = whiskeys.map(async (whiskey) => {
      const review = await findWhiskeyReviews(whiskey.id);
      reviewArr.push(review);
    })
    this.setState({
      whiskeys: whiskeyReviews,
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