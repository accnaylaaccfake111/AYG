import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import các trang và component
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import BlankPage from './pages/BlankPage';
import BottomDockMenu from './components/BottomDockMenu';

// Tạo một component phụ để chứa các Route và xử lý logic hiển thị Menu
function AppContent() {
  const location = useLocation();
  
  // Kiểm tra xem người dùng có đang ở trang Landing (đường dẫn "/") hay không
  const isLandingPage = location.pathname === '/';

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/blank" element={<BlankPage />} />
      </Routes>
      
      {/* Nếu KHÔNG phải là Landing Page thì thanh Dock Menu mới xuất hiện */}
      {!isLandingPage && <BottomDockMenu />}
    </>
  );
}

function App() {
  return (
    // <Router> BẮT BUỘC phải bọc ngoài cùng tất cả mọi thứ
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;