import React from 'react';

export default RegisterForm = (props) => {
  return (
    <div>
      <p>This is the register form</p>
      <button onClick={props.handleSubmit}>Register</button>
    </div>
  )
}