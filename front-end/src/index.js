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



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
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
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
