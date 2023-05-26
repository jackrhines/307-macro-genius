import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup';
import CalculatePage from './pages/CalculatePage';
import Food from './pages/Food';
import ProfilePage from './pages/ProfilePage'
import Search from './pages/Search'
import CreateProfile from './pages/CreateProfile';
import ProtectedRoutes from './ProtectedRoutes';
import ProfileCard from './pages/ProfileCard';



const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path = "/login" element = {<Login />} />
                <Route path = "/signup" element = {<Signup />} />

                <Route path = "/food" element = {<ProtectedRoutes>
                    <Food />
                </ProtectedRoutes>} />

                <Route path = "/calculate" element = {<ProtectedRoutes>
                    <CalculatePage />
                </ProtectedRoutes>} />

                <Route path = "/profile" element = {<ProtectedRoutes>
                    <ProfileCard />
                </ProtectedRoutes>} />

                <Route path = "/search" element = {<ProtectedRoutes>
                    <Search />
                </ProtectedRoutes>} />

                <Route path = "/createprofile" element = {
                    <CreateProfile />
                } />
                
            </Routes>
        </div>
    )
}

export default MainRoutes;