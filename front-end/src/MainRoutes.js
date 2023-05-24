import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup';
import CalculatePage from './pages/CalculatePage';
import Food from './pages/Food';
import ProfilePage from './pages/ProfilePage'
import Home from './pages/Home'
import ProtectedRoutes from './ProtectedRoutes';



const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path = "/login" element = {<Login />} />
                <Route path = "/signup" element = {<Signup />} />
                <Route path = "/" element = {<Home />} />
                <Route path = "/Home" element = {<Home />} />

                <Route path = "/food" element = {<ProtectedRoutes>
                    <Food />
                </ProtectedRoutes>} />

                <Route path = "/calculate" element = {<ProtectedRoutes>
                    <CalculatePage />
                </ProtectedRoutes>} />

                <Route path = "/profile" element = {<ProtectedRoutes>
                    <ProfilePage />
                </ProtectedRoutes>} />
            </Routes>
        </div>
    )
}

export default MainRoutes;