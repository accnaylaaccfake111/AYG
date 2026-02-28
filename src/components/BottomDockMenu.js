// src/components/BottomDockMenu.js
import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

// Import các biểu tượng phù hợp từ Material Icons
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import LayersIcon from '@mui/icons-material/Layers'; // Sử dụng Layers cho trang trống

function BottomDockMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  // Định nghĩa mảng các mục menu để dễ quản lý
  const menuItems = [
    { path: '/home', icon: <HomeIcon />, label: 'Giới thiệu' },
    { path: '/chat', icon: <ChatIcon />, label: 'Chat' },
    { path: '/blank', icon: <LayersIcon />, label: 'Trang trống' },
  ];

  return (
    <Box
      sx={{
        // --- PHẦN 1: ĐỊNH VỊ MENU ---
        position: 'fixed',
        bottom: 20, // Khoảng cách từ menu đến cạnh dưới màn hình
        left: '50%',
        transform: 'translateX(-50%)', // Căn giữa theo chiều ngang
        zIndex: 1000, // Đảm bảo menu luôn nằm trên cùng

        // --- PHẦN 2: HÌNH DẠNG VÀ NỀN (DOCK STYLE) ---
        backgroundColor: 'rgba(30, 41, 59, 0.8)', // Nền tối trong suốt (màu slate 800)
        backdropFilter: 'blur(10px)', // Làm mờ kính mờ mờ phía sau menu
        borderRadius: '30px', // Bo góc rất mạnh để tạo hình viên thuốc

        // --- PHẦN 3: BỐ CỤC NỘI DUNG ---
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly', // Căn đều các biểu tượng
        width: 'fit-content', // Chiều rộng tự động co theo nội dung
        maxWidth: '400px', // Chiều rộng tối đa để không quá bự trên PC
        height: '60px',
        padding: '0 10px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)', // Đổ bóng cho menu thêm chiều sâu
        transition: 'all 0.3s ease-in-out',
      }}
    >
      {menuItems.map((item) => {
        // Kiểm tra xem mục menu này có đang hoạt động hay không
        const isActive = location.pathname === item.path;

        return (
          <Tooltip key={item.path} title={item.label} arrow placement="top">
            <IconButton
              onClick={() => navigate(item.path)}
              sx={{
                // --- PHẦN 4: STYLE CHO TỪNG BIỂU TƯỢNG ---
                color: isActive ? '#06b6d4' : '#ffffff', // Highlight màu xanh Cyan khi active
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent', // Nền mờ nhẹ khi active
                borderRadius: '15px', // Bo góc nhẹ cho chính biểu tượng (giống app icon)
                margin: '0 5px',
                width: '40px',
                height: '40px',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Nền mờ hơn khi hover
                  transform: 'translateY(-3px)', // Nảy nhẹ lên khi hover
                },
                transition: 'all 0.2s ease',
              }}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        );
      })}
    </Box>
  );
}

export default BottomDockMenu;