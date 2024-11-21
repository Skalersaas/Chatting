import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import StyledTextField from './StyledTextField'; // Импортируем компонент

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in:', { email, password });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: 'primary.main',
        color: 'secondary.main',
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Log In
      </Typography>
      <StyledTextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon="envelope"
      />
      <StyledTextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon="lock"
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleLogin}
        sx={{
          width: '200px',
          height: '50px',
          borderRadius: '25px',
          textTransform: 'none',
          fontSize: '16px',
          transition: 'transform 0.2s, background-color 0.3s',
          '&:hover': {
            backgroundColor: 'primary.light',
            transform: 'scale(1.05)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        }}
      >
        Log In
      </Button>
    </Box>
  );
};

export default Login;
