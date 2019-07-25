import React from 'react';

export default (props) => (
  <div className="form login-form">
    <h1>Login Form</h1>
    <form onSubmit={props.handleLoginSubmit}>
      <label
        htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        value={props.loginForm.username}
        id="name"
        onChange={props.handleLoginFormChange} />
      <label
        htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={props.loginForm.password}
        id="password"
        onChange={props.handleLoginFormChange} />
      <input type="submit" value="Sign In!" />
    </form>
    {props.loginError && <p>Username or password is incorrect, please try again.</p>}
  </div>
);