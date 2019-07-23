
import React from 'react';
import Header from './Header'

const LoginForm = (props) => {
  return (
    <div>
      <Header />
      {/* <button onClick={props.handleSubmit}>Log in</button> */}
      <form>
        {/* onSubmit={this.props.handleSubmit} onChange={this.props.handleChange}> */}
        <div>
          <div>+ username</div>
          <input name="name" type="text" placeholder="username" />
          <div>+ email</div>
          <input name="email" type="text" placeholder="example@go.com" />
          <div>+ password</div>
          <input name="password_digest" type="password" placeholder="password" />
          {/* Add other fields */}
          <button>Login</button>
        </div>
      </form>


    </div>
  )
}

export default LoginForm;
