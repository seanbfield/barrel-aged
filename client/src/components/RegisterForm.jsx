import React from 'react'


export default (props) => (
  <div className="form register-form">
    <h2>Join Us</h2>
    <form onSubmit={props.handleRegisterSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={props.registerForm.username}
        id="name"
        className="form-input"
        onChange={props.handleRegisterFormChange} />
      <input
        type="text"
        name="email"
        placeholder="Email Address"
        value={props.registerForm.email}
        id="email"
        className="form-input"
        onChange={props.handleRegisterFormChange} />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={props.registerForm.password}
        id="password"
        className="form-input"
        onChange={props.handleRegisterFormChange} />
      <input className="form-button" type="submit" value="Sign Up" />
    </form>
    {props.loginError && <p>Registration failed, please check your information and try again.</p>}
  </div>
);
