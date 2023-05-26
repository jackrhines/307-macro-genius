
import React from 'react';
import './App.css';
import MainRoutes from './MainRoutes';
import Cookies from "universal-cookie";

const cookies = new Cookies();




const App = () => {

    const logout = () => {
        cookies.remove("TOKEN", { path: "/" });
        window.location.href = "/login";
    }

    
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
                <ul className="profile-navigate-menu">
                    <li><a href="/profile">Profile</a></li>
                </ul>
                <ul className="login-navigate-menu">
                    <li><a href="/login">Login</a></li>
                </ul>

                <ul className="search-navigate-menu">
                    <li><a href="/search">Search</a></li>
                </ul>

                <ul className="signout-navigate-menu">
                    <li><a onClick={() => logout()}> Sign Out</a></li>
                </ul>
                
            </div>
            
        </div>
    );
}

export default App;

