import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import MainRoutes from './MainRoutes';
import Cookies from "universal-cookie";

const cookies = new Cookies();

const App = () => {
    const [currentPage, setCurrentPage] = useState(useLocation().pathname);

    const logout = () => {
        cookies.remove("TOKEN", { path: "/" });
        window.location.href = "/login";
    }
    
    return (
        <div className="body">
            <MainRoutes/>
            <div className="calculate-page-overlap">
                <div className="top-logo-text-wrapper">MacroGenius</div>
                <ul className={`home-navigate-menu ${currentPage === "/landingPage" ? "hide-menu" : ""}`}>
                    <li><a href="/landingPage">Home</a></li>
                </ul>
                <ul className={`calcuate-navigate-menu ${currentPage === "/landingPage" ? "new-calcuate-navigate-menu" : ""}`}>
                    <li><a href="/calculate">Calculate</a></li>
                </ul>
                <ul className={`login-navigate-menu ${currentPage === "/landingPage" ? "hide-menu" : ""}`}>
                    <li><a href="/login">Login</a></li>
                </ul>
                <ul className={`search-navigate-menu ${currentPage === "/landingPage" ? "new-search-navigate-menu" : ""}`}>
                    <li><a href="/search">Search</a></li>
                </ul>
                <ul className={`signout-navigate-menu ${currentPage === "/landingPage" ? "new-signout-navigate-menu" : ""}`}>
                    <li><a onClick={() => logout()}> Sign Out</a></li>
                </ul>
                
            </div>
            
        </div>
    );
}

export default App;