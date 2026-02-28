import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function HomePage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f1f5f9', pt: 5 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Xin chào, mình là Web Developer!
        </Typography>
        <Typography variant="body1">
          Đây là trang giới thiệu bản thân. Chào mừng bạn đến với thế giới của những dòng code và bug.
        </Typography>
      </Container>
    </Box>
  );
}

export default HomePage;