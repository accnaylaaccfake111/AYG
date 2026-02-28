import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// 1. Import MyProject thay cho BlankPage
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import MyProject from './pages/MyProject'; 
import BottomDockMenu from './components/BottomDockMenu';

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        {/* 2. Cập nhật Route cho MyProject */}
        <Route path="/projects" element={<MyProject />} /> 
      </Routes>
      
      {!isLandingPage && <BottomDockMenu />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;