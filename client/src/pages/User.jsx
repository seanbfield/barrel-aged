import React from 'react';

//Deficiencies
import { fetchWhiskey } from '../services/api-helper';
import { findReview } from '../services/api-helper';
import { userByID } from '../services/api-helper'

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
      <div className="Users_Info">
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
    )
  }
}

export default User;