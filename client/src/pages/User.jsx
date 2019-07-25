import React from 'react';

import { fetchWhiskey } from '../services/api-helper';
import { findReview } from '../services/api-helper';
import { userProfile } from '../services/api-helper';

import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
    };
  };

  // Render User
  componentDidMount = async () => {
    const user = await userProfile();
    this.setState({
      user: user,
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
          {this.state.user.reviews && this.state.user.reviews.map(review => (
            <div key={review.id}>
              <p>{review.comment}</p>
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