import React from 'react';
import { showWhiskey } from '../services/api-helper';
import ReviewForm from '../components/ReviewForm';
import { createReview } from '../services/api-helper';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer'

import bottle from '../assets/graphics/bottle.png'

class Whiskey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whiskey: [],
      showForm: false,
    }
  };

  componentDidMount = async () => {
    const whiskey = await showWhiskey(this.props.id);
    this.setState({
      whiskey: whiskey,
    })
  };

  handleSubmit = async (reviewInfo) => {

    const newReview = await createReview(this.state.whiskey.id, reviewInfo);
    this.setState((prevState) => ({
      whiskey: {
        ...prevState.whiskey,
        reviews: [...prevState.whiskey.reviews, newReview]
      },
      showForm: false,
    }));
  };

  showReviewForm = () => {
    this.setState({
      showForm: true,
    });
  };

  render() {
    return (
      <div className="page whiskey-page">
        <Header />
        <div className="hero whiskey-hero">

        </div>
        <div className="whiskey-info">
          <h1>{this.state.whiskey.name}</h1>
          {this.state.whiskey.url_to_image ?
            <img src={this.state.whiskey.url_to_image} alt="Whiskey Image"></img> :
            <img src={bottle} alt="Whiskey Image" width="20%"></img>}
          <p>Brand: {this.state.whiskey.brand}</p>
          <p>Type: {this.state.whiskey.type}</p>
          {this.state.whiskey.reviews && <div id='review-section'>
            <p>Reviews:</p>
            {this.state.whiskey.reviews.map(review => (
              <div key={review.id}>
                {this.props.users.map(user => (
                  <div key={user.id}>
                    {(user.id === review.userId) && user.username}
                  </div>
                ))}
                <p>Rating: {review.rating}</p>
                <p>Comment: {review.comment}</p>
              </div>
            ))}
          </div>}
          <button onClick={this.showReviewForm}>Add a review</button>
          {this.state.showForm && <ReviewForm
            handleSubmit={this.handleSubmit}
          />}
          <Link to='/landing'><button>Go back</button></Link>
        </div>
        <CallToAction />
        <Footer />
      </div>
    )
  }
}

export default Whiskey;