import React from 'react';

export default (props) => (
  <div className="form user-form box-shadow">
    <h2>hello.</h2>
    <form onSubmit={props.handleUpdateSubmit}>
      <input
        className="form-input"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={props.userForm.firstName}
        id="first-name"
        onChange={props.handleUserFormChange} />
      <input
        className="form-input"
        type="text"
        name="username"
        placeholder="Username"
        value={props.userForm.username}
        id="username"
        onChange={props.handleUserFormChange} />
      <input
        className="form-input"
        type="text"
        name="email"
        placeholder="Email"
        value={props.userForm.email}
        id="email"
        onChange={props.handleUserFormChange} />
      <input
        className="form-input"
        type="text"
        name="location"
        placeholder="Location"
        value={props.userForm.location}
        id="location"
        onChange={props.handleUserFormChange} />
      <input
        className="form-input"
        type="text"
        name="favWhiskey"
        placeholder="Favorite Whiskey"
        value={props.userForm.favWhiskey}
        id="fav-whiskey"
        onChange={props.handleUserFormChange} />
      <input type="submit" value="Update" className="form-button smooth" />
    </form>
    {props.updateError && <p>Your request could not be processed.</p>}
  </div>
);