import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import CodeIcon from '@mui/icons-material/Code';

function BottomDockMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/home', icon: <HomeIcon />, label: 'Giới thiệu' },
    { path: '/chat', icon: <ChatIcon />, label: 'Chat' },
    { path: '/projects', icon: <CodeIcon />, label: 'Dự án' },
  ];

  return (
    <Box
      sx={{
        // ĐỊNH VỊ: Đưa hòn đảo xuống dưới cùng màn hình
        position: 'fixed',
        bottom: 30, // Cách cạnh dưới 30px
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        
        // Giao diện màu đen tuyền của Dynamic Island
        backgroundColor: '#000000', 
        borderRadius: '50px',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        
        // Chuyển động siêu mượt
        transition: 'all 0.5s cubic-bezier(0.32, 0.72, 0, 1)', 
      }}
    >
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Box
            key={item.path}
            onClick={() => navigate(item.path)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              backgroundColor: isActive ? '#262626' : 'transparent',
              borderRadius: '40px',
              padding: isActive ? '8px 20px' : '8px 12px',
              margin: '0 4px',
              transition: 'all 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
              color: isActive ? '#06b6d4' : '#525252', 
              '&:hover': {
                color: isActive ? '#06b6d4' : '#a3a3a3',
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {item.icon}
            </Box>

            <Typography
              sx={{
                ml: isActive ? 1 : 0, 
                fontWeight: 600,
                fontSize: '0.9rem',
                maxWidth: isActive ? '100px' : '0px', 
                opacity: isActive ? 1 : 0,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                transition: 'all 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
              }}
            >
              {item.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default BottomDockMenu;