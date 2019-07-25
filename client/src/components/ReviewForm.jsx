import React from 'react';
import StarRatingComponent from 'react-star-rating-component';


class ReviewForm extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: 1,
      comment: '',
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;
    return (
      <div className="form review-form">
        <form onSubmit={(e) => {
          e.preventDefault()
          this.props.handleSubmit(this.state)
        }}>
          <input
            name="comment"
            type="text"
            placeholder="Review"
            onChange={this.handleChange}
            value={this.state.review}
          />
          {/* <Star onChange={this.handleChange} /> */}

          <div>
            <h2>Rate Your Fav Whiskey</h2>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />
          </div>

          <button type='submit' value='submit'>Submit Reviews</button>
        </form>
      </div>
    )
  }
}


export default ReviewForm;