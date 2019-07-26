import React from 'react';

export default (props) => (
  <div className="form login-form box-shadow">
    <h1>hello.</h1>
    <form onSubmit={props.handleLoginSubmit}>
      <input
        className="form-input"
        type="text"
        name="username"
        placeholder="Username"
        value={props.loginForm.username}
        id="name"
        className="form-input"
        onChange={props.handleLoginFormChange} />
      <input
        className="form-input"
        type="password"
        name="password"
        placeholder="Password"
        value={props.loginForm.password}
        id="password"
        className="form-input"
        onChange={props.handleLoginFormChange} />
      <input type="submit" value="Sign In" className="form-button smooth" />
    </form>
    {props.loginError && <p>Username or password is incorrect, please try again.</p>}
  </div>
);