
import React from 'react';
import './App.css';
import MainRoutes from './MainRoutes';




const App = () => {

    
    return (
        <div className="body">
            <MainRoutes/>
            <div className="calculate-page-overlap">
                <div className="top-logo-text-wrapper">MacroGenius</div>
                <ul className="calcuate-navigate-menu">
                    <li><a href="/calculate">Calculate</a></li>
                </ul>
                <ul className="home-navigate-menu">
                    <li><a href="/">Home</a></li>
                </ul>
                <ul className="login-navigate-menu">
                    <li><a href="/login">Login</a></li>
                </ul>
                
            </div>
            
        </div>
    );
}

export default App;

