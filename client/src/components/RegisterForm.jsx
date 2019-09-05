import React from 'react'


export default (props) => (
  <div className="form register-form">
    <h2>Join us!</h2>
    <form onSubmit={props.handleRegisterSubmit}
      className="form-size">
      <input
        className="form-input"
        type="text"
        name="username"
        placeholder="Username"
        value={props.registerForm.username}
        id="name"
        onChange={props.handleRegisterFormChange}
        className="form-input"
      />
      <input
        className="form-input"
        type="text"
        name="email"
        placeholder="Email"
        value={props.registerForm.email}
        id="email"
        onChange={props.handleRegisterFormChange}
        className="form-input"
      />
      <input
        className="form-input"
        type="password"
        name="password"
        placeholder="Password"
        value={props.registerForm.password}
        id="password"
        onChange={props.handleRegisterFormChange}
        className="form-input"
      />
      <input className="form-button" type="submit" value="Sign Up!" />
    </form>
    {props.loginError && <p>Registration failed, please check your information and try again.</p>}
  </div>
);
