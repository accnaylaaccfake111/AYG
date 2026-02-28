// src/pages/ChatPage.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; // Bạn cần cài @mui/icons-material nếu muốn dùng icon này
import TopMenu from '../components/TopMenu';

function ChatPage() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, sender: 'bot', text: 'Chào bạn! Mình có thể giúp gì cho bạn hôm nay?' }
  ]);

  const handleSend = () => {
    if (message.trim() !== '') {
      // Thêm tin nhắn của user vào lịch sử
      setChatHistory([...chatHistory, { id: Date.now(), sender: 'user', text: message }]);
      setMessage(''); // Xóa trắng ô input
    }
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#e2e8f0' }}>
      <TopMenu />
      
      <Container maxWidth="md" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', py: 3, height: 'calc(100vh - 64px)' }}>
        
        {/* Khung hiển thị tin nhắn */}
        <Paper sx={{ flexGrow: 1, p: 2, mb: 2, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: '#ffffff' }}>
          {chatHistory.map((msg) => (
            <Box 
              key={msg.id} 
              sx={{ 
                display: 'flex', 
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' 
              }}
            >
              <Box 
                sx={{
                  maxWidth: '70%',
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: msg.sender === 'user' ? '#1976d2' : '#f1f5f9',
                  color: msg.sender === 'user' ? '#fff' : '#000',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
              >
                <Typography variant="body1">{msg.text}</Typography>
              </Box>
            </Box>
          ))}
        </Paper>

        {/* Khung nhập tin nhắn */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField 
            fullWidth 
            variant="outlined" 
            placeholder="Nhập tin nhắn..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }} // Bấm Enter để gửi
            sx={{ backgroundColor: '#fff', borderRadius: 1 }}
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSend}
            sx={{ px: 4 }}
          >
            Gửi
          </Button>
        </Box>

      </Container>
    </Box>
  );
}

export default ChatPage;