import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
        px: 3,
      }}
    >
      <Typography variant="h3" sx={{ mb: 4, color: 'text.primary', fontWeight: 'bold' }}>
        Welcome to CHATTING
      </Typography>
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Button variant="contained" color="secondary" onClick={() => navigate('/login')}>
          Log In
        </Button>
        <Button variant="outlined" color="secondary" onClick={() => navigate('/register')}>
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomePage;
