import React from 'react';
import rating from 'react-star-rating';
import { createReview } from '../services/api-helper';

class ReviewForm extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: '',
      comment: '',
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
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
          <select name="rating" onChange={this.handleChange}>
            <option> -- </option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <button type='submit' value='submit'>Submit Reviews</button>
        </form>
      </div>
    )
  }
}


export default ReviewForm;