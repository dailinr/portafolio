import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { ThemeContextProvider } from './context/ThemeContext.jsx';
import { BrowserRouter } from 'react-router-dom';
// import 'boxicons'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <ThemeContextProvider>
        <BrowserRouter >
        <App />
        </BrowserRouter>
    </ThemeContextProvider>
);