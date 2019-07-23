import React from 'react';

const  LoginForm = (props) => {
  return (
    <div>
      <p>This is the login form</p>
      <button onClick={props.handleSubmit}>Log in</button>
    </div>
  )
}

export default LoginForm