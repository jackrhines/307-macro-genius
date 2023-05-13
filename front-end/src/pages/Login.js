import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login logic here with username and password
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="body">
        <div className="calculate-page-overlap">
            <div className="top-logo-text-wrapper">MacroGenius</div>
            <ul className="calcuate-navigate-menu">
                <li><a href="/calculate">Calculate</a></li>
            </ul>
        </div>

        <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
            <h2 className="Auth-form-title">
                Login 
            </h2>
            <div className="switch-link">
                Not registered yet?{" "}
                <span className="link-primary" onClick={null}>
                Sign Up
                </span>
            </div>
            <div className="form-group">
                <label>Username</label>
                <input
                value={username}
                onChange={handleUsernameChange}
                type="username"
                placeholder='Username'
                className="form-input"
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                value={password}
                onChange={handlePasswordChange}
                type="password"
                placeholder='Password'
                className="form-input"
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn"> Submit </button>
            </div>
            </div>
        </form>
        </div>
    </div>
        
  );
};

export default Login;