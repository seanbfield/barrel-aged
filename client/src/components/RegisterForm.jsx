import React from 'react'

export default (props) => (
  <>
    <h3>Register Form</h3>
    <form onSubmit={props.handleSubmit}>
      <label
        htmlFor="name">Name</label>

      <input
        type="text"
        name="name"
        value={props.registerForm.name}
        id="name"
        onChange={props.handleChange} />

      <label
        htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={props.registerForm.password}
        id="password"
        onChange={props.handleChange} />

      <label
        htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        value={props.registerForm.email}
        id="email"
        onChange={props.handleChange} />

      <input type="submit" value="Sign Up!" />
    </form>
    <h1>Empty</h1>
  </>
);
