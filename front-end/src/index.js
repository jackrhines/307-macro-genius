import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CalculatePage from './pages/CalculatePage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "calculate",
    element: <CalculatePage/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
