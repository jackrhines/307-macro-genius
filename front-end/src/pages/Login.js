import React, {useEffect, useState } from 'react';
import './LoginSignUp.css';
import axios from 'axios';
import Cookies from "universal-cookie";

const cookies = new Cookies();



const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "http://localhost:8000/free-endpoint",
    };
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:8000/login",
      data: {
        username,
        password,
      },
    };

    axios(configuration).then((result) => {
      alert("Login success");
      setLogin(true);
      cookies.set("TOKEN", result.data.token, {
        path:"/",
      });
      cookies.set("USER", result.data.username, {
        path:"/",
      });
      window.location.href = "/landingPage";
    }).catch((error) => {
      alert("Login failed");
      error = new Error();
    })
    

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
                  <span><a href="/signup">Sign Up</a></span>
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
                  <button type="submit" className="btn"> SIGN IN </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    
  );
};

export default Login;