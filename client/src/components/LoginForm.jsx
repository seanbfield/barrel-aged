import React from 'react';

export default (props) => (
  <>
    <h3>Login Form</h3>
    <form onSubmit={props.handleSubmit}>
      <label
        htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={props.loginForm.email}
        id="email"
        onChange={props.handleChange} />


      <label
        htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={props.loginForm.password}
        id="password"
        onChange={props.handleChange} />
      <input type="submit" value="Sign In!" />
    </form>
  </>
);