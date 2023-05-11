import React from 'react'
import ReactDOMClient from 'react-dom/client'
import MyApp from './MyApp'
import Food from './Food'
import './index.css'

const container = document.getElementById('root');

// Create a root

const root = ReactDOMClient.createRoot(container);

// Initial render:

root.render(<Food />);