import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import LearningHub from './components/LearningHub';
import SmeToolkit from './components/SmeToolkit';
import LandingPage from './components/LandingPage';
import { AuthProvider } from './context/AuthContext';
import Login from './components/login';
import SignUp from './components/Signup';
import Transaction from './components/Transaction';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
