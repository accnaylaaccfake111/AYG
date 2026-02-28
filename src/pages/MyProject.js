import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';

// Dữ liệu mẫu cho các dự án của bạn
const myProjects = [
  { 
    id: 1, 
    title: 'E-commerce Web App', 
    description: 'Trang web thương mại điện tử đầy đủ chức năng giỏ hàng, thanh toán và quản lý sản phẩm.', 
    techStack: ['React', 'Material-UI', 'Redux'] 
  },
  { 
    id: 2, 
    title: 'Real-time Chat Application', 
    description: 'Ứng dụng nhắn tin trực tiếp giống Messenger, hỗ trợ tạo phòng chat riêng tư.', 
    techStack: ['React', 'Node.js', 'Socket.io'] 
  },
  { 
    id: 3, 
    title: 'Dark Mode Portfolio', 
    description: 'Mẫu trang web cá nhân hiện đại với hiệu ứng Glassmorphism và chuyển động mượt mà.', 
    techStack: ['React', 'CSS Animation', 'MUI'] 
  },
];

function MyProject() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc', pt: 8, pb: 12 }}>
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontWeight: 700, color: '#1e293b', mb: 1, textAlign: 'center' }}>
          Dự án của tôi
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#64748b', mb: 5, textAlign: 'center' }}>
          Những sản phẩm tâm huyết mà mình đã xây dựng
        </Typography>

        <Grid container spacing={4}>
          {myProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  
                  {/* Khu vực hiển thị các công nghệ sử dụng */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.techStack.map((tech, index) => (
                      <Chip key={index} label={tech} size="small" sx={{ backgroundColor: '#e2e8f0', color: '#334155', fontWeight: 500 }} />
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" sx={{ fontWeight: 600 }}>Xem chi tiết</Button>
                  <Button size="small" color="secondary">Source Code</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default MyProject;