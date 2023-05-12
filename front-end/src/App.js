import React from 'react'
import './App.css'
import Login from './loginSignUp/Login'
import SignUp from './loginSignUp/SignUp'

function App() {

    return (
      <div className="body">
        <div className="calculate-page-overlap">
        <div className="top-logo-text-wrapper">MacroGenius</div>
        <div className="login-signup-wrapper">
          <Login />
        </div>
        </div>
      </div>
    );
}

export default App;