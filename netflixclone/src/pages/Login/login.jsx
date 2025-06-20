// src/pages/Login/login.js

import React from 'react';
import logo from '../../assets/logo.png';
import './Login.css'
const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt='Logo' />
      <div className='login-form'>
        <h1>Sign Up</h1>
        <form>
          <input type='text' placeholder='Your name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>Sign In</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' />
              <label>Remember me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className='form-switch'>
            <p>New to Netflix? <span>Sign up Now</span></p>
            <p>Already have account <span>Sign In Now</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
