import React from 'react';

const RegisterForm = (props) => {
  return (
    <div>
      <p>This is the register form</p>
      <button onClick={props.handleSubmit}>Register</button>
    </div>
  )
}

export default RegisterForm;