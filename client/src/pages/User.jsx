import React from 'react';

import { userProfile, fetchWhiskey, updateUser, deleteReview } from '../services/api-helper';

import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import UpdateUserForm from '../components/UpdateUserForm';
import Footer from '../components/Footer';

import portrait from '../assets/graphics/bottle-label.png'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      whiskeys: [],
      userForm: {
        firstName: '',
        username: '',
        email: '',
        location: '',
        favWhiskey: '',
      },
      updateForm: null,
      updateError: false,
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

  handleUserFormChange = (ev) => {
    const { name, value } = ev.target;
    this.setState(prevState => ({
      userForm: {
        ...prevState.userForm,
        [name]: value,
      },
    }));
  }

  deleteReviewSubmit = async (reviewId) => {
    const userId = this.state.user.id;
    const updatedUser = await deleteReview(userId, reviewId);
    this.setState({
      user: updatedUser,
    })
  }

  handleUpdateSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const updatedUser = await updateUser(this.state.user.id, this.state.userForm);
      this.setState({
        user: updatedUser,
        userForm: {
          firstName: '',
          username: '',
          email: '',
          location: '',
          favWhiskey: '',
        },
        updateError: false,
        updateForm: null,
      });
    } catch (e) {
      console.log(e)
      this.setState({
        updateError: true,
      });
    }
  }

  showUpdateForm = async () => {
    this.setState({
      updateForm: true,
    });
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
                <button onClick={() => this.deleteReviewSubmit(review.id)} className="delete-button smooth">Delete review</button>
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