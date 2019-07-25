import React from 'react';

import { userProfile, fetchWhiskey, updateUser } from '../services/api-helper';

import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import UpdateUserForm from '../components/UpdateUserForm';
import Footer from '../components/Footer';

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
      <div className="page user-page">
        <Header />
        <div className="hero user-hero gradient-inspiration">
          <h1>Welcome back, {(this.state.user.first_name ? this.state.user.first_name : this.state.user.username)}!</h1>
        </div>
        <div className="user-info">
          <div key={this.state.user.id}>
            <h1>Email: {this.state.user.email}</h1>
            <h1>Username: {this.state.user.username}</h1>
            {this.state.user.location && <h1>Location: {this.state.user.location}</h1>}
            {this.state.user.fav_whiskey && <h1>Favorite Whiskey: {this.state.user.fav_whiskey}</h1>}
          </div>
          <button onClick={this.showUpdateForm}>Add more info!</button>
        </div>
        {this.state.updateForm &&
          <UpdateUserForm
            userForm={this.state.userForm}
            handleUpdateSubmit={this.handleUpdateSubmit}
            handleUserFormChange={this.handleUserFormChange}
            updateError={this.state.updateError}
          />}
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