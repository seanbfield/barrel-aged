import React from 'react';

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

  sendToWhiskey = (id) => {
    this.props.history.push(`/whiskey/${id}`);
  };

  render() {
    return (
      <div className="page">
        <Header />
        <div className="user-hero gradient-inspiration">
          <div className="user-image" >
            <img src={portrait} />
          </div>
          <div className="user-info">
            <div key={this.state.user.id}>
              <h1>Welcome, {(this.state.user.first_name ? this.state.user.first_name : this.state.user.username)}!</h1>
              <div className="user-details">
                <p>Contact: {this.state.user.email}</p>
                {this.state.user.location && <p>Location: {this.state.user.location}</p>}
                {this.state.user.fav_whiskey && <p>Favorite Whiskey: {this.state.user.fav_whiskey}</p>}
              </div>
            </div>
            <button onClick={this.showUpdateForm} id="update-profile-button">Update Profile</button>
          </div>
        </div>
        <div className="body">
          <div className="update-form">
            {this.state.updateForm &&
              <UpdateUserForm
                userForm={this.state.userForm}
                handleUpdateSubmit={this.handleUpdateSubmit}
                handleUserFormChange={this.handleUserFormChange}
                updateError={this.state.updateError}
              />}
          </div>
          <div className="review-list">
            <h2>My Reviews:</h2>
            {this.state.user.reviews && this.state.user.reviews.map(review => (
              <div key={review.id} className="review-card box-shadow">
                {this.state.whiskeys.map(whiskey => (
                  (whiskey.id === review.whiskeyId) && <h3>{whiskey.name}</h3>
                ))}
                <p>Rating: {review.rating}</p>
                <p>Comment: {review.comment}</p>
                {/* <button onClick={() => { this.sendToWhiskey(whiskey.id) }} id="review-button">View Whiskey</button> */}
              </div>
            ))}
          </div>
          <CallToAction />
        </div>
        <Footer />
      </div>
    )
  }
}

export default User;