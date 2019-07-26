import React from 'react'


export default (props) => (
  <div className="form register-form">
    <h3>Join us!</h3>
    <form onSubmit={props.handleRegisterSubmit}
      className="form-size">
      <input
        className="form-input"
        type="text"
        name="username"
        value={props.registerForm.username}
        id="name"
        onChange={props.handleRegisterFormChange} />
      <input
        className="form-input"
        type="password"
        name="password"
        value={props.registerForm.password}
        id="password"
        onChange={props.handleRegisterFormChange} />
      <input
        className="form-input"
        type="text"
        name="email"
        value={props.registerForm.email}
        id="email"
        onChange={props.handleRegisterFormChange} />

      <input className="form-button" type="submit" value="Sign Up!" />
    </form>
    {props.loginError && <p>Registration failed, please check your information and try again.</p>}
  </div>
);
