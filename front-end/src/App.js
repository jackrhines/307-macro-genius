import React , { useState }from 'react'
import './App.css'
import Login from './loginSignUp/Login'
import SignUp from './loginSignUp/SignUp'

function App() {
  const [currentForm, setCurrentForm] = useState('');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="body">
      <div className="calculate-page-overlap">
      <div className="top-logo-text-wrapper">MacroGenius</div>
      <div className="login-signup-wrapper">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
        }
      </div>
      </div>
    </div>
  );
}

export default App;