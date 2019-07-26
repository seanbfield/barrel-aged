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
      <div className="page">
        <Header />
        <div className="landing-hero gradient-background">
          <h1>Welcome to Barrel-Aged.</h1>
        </div>
        <div className="body">
          <h2>Featured Whiskeys:</h2>
          <div id="whiskey-list">
            {this.state.whiskeys.map(whiskey => (
              <div key={whiskey.id} className="whiskey-card box-shadow">
                <h3>{whiskey.name}</h3>
                <p>Rating: </p>{this.state.aggRatings.map(rating => (
                  (rating.id === whiskey.id) && (rating.rating ? <h3>{rating.rating} Star</h3> : <p>Sorry, no rating available.</p>)
                ))}
                <h4>{whiskey.brand} {whiskey.type}</h4>
                <p>{whiskey.description}</p>
                <button onClick={() => { this.sendToWhiskey(whiskey.id) }} className="smooth review-button clicked">Review This Whiskey</button>
              </div>
            ))}
          </div>
          <CallToAction />
        </div>
        <Footer />
      </div >
    )
  }
}

export default withRouter(Landing);