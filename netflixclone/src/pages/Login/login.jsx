import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Login.css';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [signState, setSignState] = useState('Sign In');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // 👈 New loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      if (signState === 'Sign Up') {
        if (!name) {
          alert('Please enter your name to sign up.');
          setLoading(false);
          return;
        }
        await signup(name, email, password);
        alert("✅ Signup successful!");
      } else {
        await login(email, password);
        alert("✅ Login successful!");
      }

      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      alert('❌ Auth failed: ' + err.message);
    }

    setLoading(false); // End loading
  };

  return (
    <div className='login'>
      <img src={logo} alt='Logo' className='login-logo' />

      <div className='login-form'>
        <h1>{signState}</h1>

        {loading ? (
          <div className='spinner-container'>
            <img src={netflix_spinner} alt='Loading...' className='spinner' />
            <p>Authenticating...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {signState === 'Sign Up' && (
              <input
                type='text'
                placeholder='Your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type='submit'>{signState}</button>

            <div className='form-help'>
              <div className='remember'>
                <input type='checkbox' id='remember' />
                <label htmlFor='remember'>Remember me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
        )}

        <div className='form-switch'>
          {signState === 'Sign Up' ? (
            <p>
              Already have an account?
              <span onClick={() => setSignState('Sign In')}> Sign In now</span>
            </p>
          ) : (
            <p>
              New to Netflix?
              <span onClick={() => setSignState('Sign Up')}> Sign up now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
