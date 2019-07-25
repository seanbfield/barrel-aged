import React from 'react';
import { fetchWhiskey } from '../services/api-helper';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer'

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
      const agg = Math.round(counter / whiskey.reviews.length);
      this.setState(prevState => ({
        aggRatings: [...prevState.aggRatings, {
          id: whiskey.id,
          rating: agg
        }]
      }));
    });
  };

  sendToWhiskey = (id) => {
    this.props.history.push(`/whiskey/${id}`);
  };

  logOut = () => {
    localStorage.clear();
    this.props.history.push('/home');
  };

  render() {
    return (
      <div className="page landing-page">
        <Header />
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
              <button onClick={() => { this.sendToWhiskey(whiskey.id) }}>Review this whiskey</button>
            </div>
          ))}
          <button onClick={this.logOut}>Log Out</button>
        </div>
        <CallToAction />
        <Footer />
      </div>
    )
  }
}

export default withRouter(Landing);