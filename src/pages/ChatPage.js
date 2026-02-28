import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, TextField, Button, Paper, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ChatPage() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, sender: 'bot', text: 'Chào bạn! Mình có thể giúp gì cho bạn hôm nay?' }
  ]);

  // 1. Tạo một tham chiếu (ref) trỏ đến cuối danh sách tin nhắn
  const messagesEndRef = useRef(null);

  // 2. Hàm tự động cuộn xuống cái tham chiếu đó một cách mượt mà
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 3. Gọi hàm cuộn mỗi khi mảng chatHistory có sự thay đổi (có tin mới)
  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSend = () => {
    if (message.trim() !== '') {
      setChatHistory([...chatHistory, { id: Date.now(), sender: 'user', text: message }]);
      setMessage('');
    }
  };

  return (
    // Thêm padding-bottom (pb) 100px để không bị thanh Dock Menu đè lên chỗ nhập chữ
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#e2e8f0', pb: '100px' }}>
      
      <Container maxWidth="md" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', pt: 3, height: '100%' }}>
        
        {/* Khung hiển thị danh sách tin nhắn */}
        <Paper sx={{ 
          flexGrow: 1, 
          p: 3, 
          mb: 2, 
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2, 
          backgroundColor: '#ffffff',
          borderRadius: '16px', // Bo góc nguyên khung chat
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
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
                  maxWidth: '75%',
                  p: 2,
                  // Tinh chỉnh bo góc: đuôi bong bóng nhọn hướng về phía người gửi
                  borderRadius: msg.sender === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                  backgroundColor: msg.sender === 'user' ? '#06b6d4' : '#f1f5f9', // Dùng màu Cyan cho hợp theme
                  color: msg.sender === 'user' ? '#fff' : '#1e293b',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                }}
              >
                <Typography variant="body1">{msg.text}</Typography>
              </Box>
            </Box>
          ))}
          
          {/* 4. Đây là cái neo tàng hình để khung chat luôn cuộn xuống đây */}
          <div ref={messagesEndRef} />
        </Paper>

        {/* Khung nhập tin nhắn */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField 
            fullWidth 
            variant="outlined" 
            placeholder="Nhập tin nhắn của bạn..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }} // Bắt sự kiện phím Enter
            sx={{ 
              backgroundColor: '#fff', 
              borderRadius: '30px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '30px', // Bo tròn hai đầu ô nhập chữ
              }
            }}
          />
          <Button 
            variant="contained" 
            onClick={handleSend}
            sx={{ 
              borderRadius: '30px', 
              px: 4, 
              backgroundColor: '#06b6d4',
              '&:hover': { backgroundColor: '#0891b2' }
            }}
            endIcon={<SendIcon />} // Thêm icon máy bay giấy
          >
            Gửi
          </Button>
        </Box>

      </Container>
    </Box>
  );
}

export default ChatPage;