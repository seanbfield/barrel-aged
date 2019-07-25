import React from 'react'

export default (props) => (
  <div className="form register-form">
    <h3>Register Form</h3>
    <form onSubmit={props.handleRegisterSubmit}>
      <label
        htmlFor="name">Name</label>

      <input
        type="text"
        name="username"
        value={props.registerForm.username}
        id="name"
        onChange={props.handleRegisterFormChange} />

      <label
        htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={props.registerForm.password}
        id="password"
        onChange={props.handleRegisterFormChange} />

      <label
        htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={props.registerForm.email}
        id="email"
        onChange={props.handleRegisterFormChange} />

      <input type="submit" value="Sign Up!" />
    </form>
  </div>
);
