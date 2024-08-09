import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login-container">
      
      <div className="login-box">
        <div className="login-heading">
          <p>login</p>
        </div>
        <div className="email">
          <label htmlFor="email">email</label>
          <input type="email" name="email" id="email" placeholder='Enter Your E-mail' />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter Your Password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login