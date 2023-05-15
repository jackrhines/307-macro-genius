import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CalculatePage from './pages/CalculatePage';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import Food from './pages/Food';
import BackButton from './pages/Back';
import GoalList from './pages/GoalList';
import ProfileCard from './pages/ProfileCard';
import './App.css'


const profile = {
  name: 'Steph Curry',
  height: 188,
  weight: 185,
  age: 35,
  activityLevel: 'Very Active',
  imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png'
};

const goals = ['Goal 1', 'Goal 2', 'Goal 3'];
const achievements = ['Achievement 1', 'Achievement 2', 'Achievement 3'];

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "signup",
    element: <SignUpPage/>,
  },
  {
    path: "calculate",
    element: <CalculatePage/>,
  },
  {
    path: "foods",
    element: <Food/>,
  },
  {
    path: "profile",
    element: <div className="profile">
      <GoalList title="Your Goals" goals={goals} />
      <ProfileCard profile={profile} />
      <GoalList title="Your Achievements" goals={achievements} />
      <BackButton />
    </div>,
  }
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
