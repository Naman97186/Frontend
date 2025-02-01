import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
// import LogIn from './Pages/Login/Login.jsx ';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
    <Routes>
    {/* <Route path="/login" element={<LogIn />} /> */}
    </Routes>
  </Router>
);

