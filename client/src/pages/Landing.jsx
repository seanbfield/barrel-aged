import React from 'react';
import { fetchWhiskey } from '../services/api-helper';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whiskeys: [],
      aggRatings: []
    };
  };

  componentDidMount = async () => {
    const whiskeys = await fetchWhiskey();
    this.setState({
      whiskeys: whiskeys,
    })
    this.aggRatings();
  };

  aggRatings = () => {
    this.state.whiskeys.map(whiskey => {
      let counter = 0
      whiskey.reviews.map(review => {
        counter += review.rating;
      });
      const agg = counter / whiskey.reviews.length;
      this.setState(prevState => ({
        aggRatings: [...prevState.aggRatings, {
          id: whiskey.id,
          rating: agg
        }]
      }));
    });
  };

  render() {
    return (
      <div id="whiskey-list">
        <h2>Featured whiskeys:</h2>
        {this.state.whiskeys.map(whiskey => (
          <div key={whiskey.id}>
            <h3>{whiskey.name}</h3>
            <p>Rating: </p>{this.state.aggRatings.map(rating => (
              (rating.id === whiskey.id) && (rating.rating ? <p>{rating.rating}</p> : <p>No Rating Available</p>)
            ))}
            <p>{whiskey.brand}</p>
            <p>{whiskey.type}</p>
            <p>{whiskey.description}</p>
            {whiskey.urlToImage && <img src={whiskey.urlToImage} />}
            <button>Review this whiskey</button>
          </div>
        ))}
      </div>
    )
  }
}

export default Landing;