// src/pages/Login/login.js

import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Login.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle state

  return (
    <div className='login'>
      <img src={logo} alt='Logo' className='login-logo' />

      <div className='login-form'>
        <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        <form>
          {isSignUp && <input type='text' placeholder='Your name' />}
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button type='submit'>{isSignUp ? 'Sign Up' : 'Sign In'}</button>

          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' id='remember' />
              <label htmlFor='remember'>Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className='form-switch'>
          {isSignUp ? (
            <p>
              Already have an account?
              <span onClick={() => setIsSignUp(false)}> Sign In now</span>
            </p>
          ) : (
            <p>
              New to Netflix?
              <span onClick={() => setIsSignUp(true)}> Sign up now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
