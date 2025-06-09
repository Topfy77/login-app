import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './loginPage';
import HomePage from './HomePage';
import ForgotPasswordPage from './ForgotPasswordPage';
import { Drawer } from '@mui/material';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
