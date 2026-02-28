import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import logo from './img/logo.png'; 

// Quỹ đạo xoay vòng tròn
const spin1 = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30vw, 20vh) scale(1.2); }
  50% { transform: translate(0vw, 40vh) scale(0.9); }
  75% { transform: translate(-30vw, 20vh) scale(1.1); }
  100% { transform: translate(0, 0) scale(1); }
`;

const spin2 = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(-30vw, -20vh) scale(1.1); }
  50% { transform: translate(0vw, -40vh) scale(0.9); }
  75% { transform: translate(30vw, -20vh) scale(1.2); }
  100% { transform: translate(0, 0) scale(1); }
`;

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0f172a', 
      }}
    >
      {/* --- CÁC KHỐI BLUR --- */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '10%',
          width: '50vw',
          height: '50vw',
          backgroundColor: '#8b5cf6', 
          borderRadius: '50%',
          filter: 'blur(120px)',
          opacity: 0.6,
          animation: `${spin1} 10s linear infinite`, 
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10%',
          right: '10%',
          width: '55vw',
          height: '55vw',
          backgroundColor: '#06b6d4', 
          borderRadius: '50%',
          filter: 'blur(130px)',
          opacity: 0.5,
          animation: `${spin2} 12s linear infinite`, 
          zIndex: 1,
        }}
      />

      {/* --- NỘI DUNG CHÍNH --- */}
      <Container maxWidth="sm" sx={{ textAlign: 'center', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* LOGO ĐƯỢC PHÓNG TO */}
        <Box
          component="img"
          src={logo}
          alt="NDC Logo"
          sx={{
            // Dùng responsive size: đt (xs) 220px, tablet (sm) 300px, PC (md) 380px
            width: { xs: '220px', sm: '300px', md: '380px' }, 
            height: 'auto',
            mb: 4, // Tăng khoảng cách dưới logo vì đã bỏ chữ NDC
            filter: 'drop-shadow(0px 0px 25px rgba(255, 255, 255, 0.3))', // Phát sáng mạnh hơn chút
            transition: 'transform 0.3s ease', // Thêm hiệu ứng mượt nếu sau này muốn hover
            '&:hover': {
              transform: 'scale(1.05)' // Phóng to nhẹ khi chĩa chuột vào logo
            }
          }}
        />

        {/* Slogan */}
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.8)', // Chữ sáng hơn tí xíu cho dễ đọc
            mb: 5, 
            fontWeight: 400,
            fontStyle: 'italic', 
            letterSpacing: '1px'
          }}
        >
          "Ở đây chúng tôi tạo ra vấn đề và bán giải pháp"
        </Typography>
        
        {/* Nút bấm Glassmorphism */}
        <Button 
          variant="outlined" 
          size="large"
          onClick={() => navigate('/home')}
          sx={{
            borderRadius: '50px',
            padding: '12px 40px',
            fontSize: '1.2rem',
            textTransform: 'none',
            color: '#ffffff',
            borderColor: 'rgba(255, 255, 255, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            backdropFilter: 'blur(10px)', 
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderColor: '#ffffff',
              transform: 'translateY(-4px) scale(1.05)', 
              boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)', 
            }
          }}
        >
          Tìm hiểu thêm
        </Button>
      </Container>
    </Box>
  );
}

export default LandingPage;