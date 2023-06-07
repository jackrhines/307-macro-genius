import React, { useState } from "react";
import "./LoginSignUp.css";
import axios from "axios";
// import axios from 'axios';

const SignUp = (props) => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === passwordConfirm) {
      // Passwords match, proceed with sign-up logic
      const configuration = {
        method: "post",
        url: "http://localhost:8000/register",
        data: {
          username,
          password,
        },
      };
      axios(configuration)
        .then((result) => {
          setRegister(true);
          console.log(register);
        })
        .catch((error) => {
          error = new Error();
        });
      alert("Registered Successfully");
      window.location.href = "/login";
    } else {
      // Passwords don't match, display error message
      setPasswordConfirm(false);
      alert("Not Registered");
    }

    // Perform login logic here with username and password
    console.log("Full Name:", fullName);
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h2 className="Auth-form-title">Sign Up</h2>
          <div className="switch-link">
            Already registered?{" "}
            <span>
              <a href="/login">Sign In</a>
            </span>
          </div>
          <div className="form-group">
            <label type="login">Full Name</label>
            <input
              value={fullName}
              onChange={handleFullNameChange}
              type="name"
              placeholder="e.g. John Smith"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label type="login">Username</label>
            <input
              value={username}
              onChange={handleUsernameChange}
              type="username"
              placeholder="Username"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label type="login">Password</label>
            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              placeholder="Password"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label type="login">Confirm Password</label>
            <input
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              type="password"
              placeholder="Password"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn">
              {" "}
              CREATE ACCOUNT{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
