import React from 'react';

import { userProfile, fetchWhiskey } from '../services/api-helper';

import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      whiskeys: [],
    };
  };

  // Render User
  componentDidMount = async () => {
    const user = await userProfile();
    const whiskeys = await fetchWhiskey();
    this.setState({
      user: user,
      whiskeys: whiskeys,
    });
  };

  render() {
    return (
      <div className="page user-page">
        <Header />
        <div className="hero user-hero gradient-inspiration">
          <h1>Welcome back, {this.state.user.username}!</h1>
        </div>
        <div className="user-info">
          <div key={this.state.user.id}>
            <h1>{this.state.user.email}</h1>
            <h1>{this.state.user.username}</h1>
          </div>
        </div>
        <div className="review-list">
          <h2>Reviews:</h2>
          {this.state.user.reviews && this.state.user.reviews.map(review => (
            <div key={review.id}>
              {this.state.whiskeys.map(whiskey => (
                (whiskey.id === review.whiskeyId) && <h3>{whiskey.name}</h3>
              ))}
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
            </div>
          ))}
        </div>
        <CallToAction />
        <Footer />
      </div>
    )
  }
}

export default User;