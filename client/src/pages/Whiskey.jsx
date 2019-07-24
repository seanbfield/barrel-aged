import React from 'react';
import { showWhiskey } from '../services/api-helper';
import ReviewForm from '../components/ReviewForm';

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

  showReviewForm = () => {
    this.setState({
      showForm: true,
    });
  };

  render() {
    return (
      <main>
        <h1>{this.state.whiskey.name}</h1>
        <p>Brand: {this.state.whiskey.brand}</p>
        <p>Type: {this.state.whiskey.type}</p>
        {this.state.whiskey.reviews && <div id='review-section'>
          <p>Reviews:</p>
          {this.state.whiskey.reviews.map(review => (
            <div key={review.id}>
              <p>Rating: {review.rating}</p>
              <p>Comment: {review.comment}</p>
            </div>
          ))}
        </div>}
        <button onClick={this.showReviewForm}>Add a review</button>
        {this.state.showForm && <ReviewForm />}
      </main>
    )
  }
}

export default Whiskey;