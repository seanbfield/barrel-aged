import React from 'react';

import { fetchWhiskey } from '../services/api-helper';
import { findReview } from '../services/api-helper';
import { userByID } from '../services/api-helper'

import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
    };
  };

  // Render My Reviews
  componentDidMount = async () => {
    const review = await findReview(this.props.currentUser.id)
    this.setState({
      reviews: review,
    });
  };

  render() {
    const { currentUser } = this.props;
    return (
      <div className="page user-page">
        <Header />
        <div className="user-info">
          {/* {this.state.currentUsers.map(user => ( */}
          <div key={currentUser.id}>
            <h1>{currentUser.email}</h1>
            <h1>{currentUser.username}</h1>

          </div>
          {/* ))} */}
          {this.state.reviews.map(review => (
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