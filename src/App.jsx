import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Chatbot from './components/Chatbot';
import LearningHub from './components/LearningHub';
import SmeToolkit from './components/SmeToolkit';
import LandingPage from './components/LandingPage';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/learn" element={<LearningHub />} />
        <Route path="/sme" element={<SmeToolkit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
