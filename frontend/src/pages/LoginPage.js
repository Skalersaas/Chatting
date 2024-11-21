import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Симуляция проверки данных. Замените это на запрос к API бэкенда.
    if (email === 'user@example.com' && password === 'password123') {
      onLogin(true); // Если данные верны, перенаправляем на MainPage
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, color: 'text.primary' }}>
        Log In
      </Typography>
      <Box sx={{ width: '300px' }}>
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
          InputLabelProps={{ style: { color: 'text.secondary' } }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
          InputLabelProps={{ style: { color: 'text.secondary' } }}
        />
        {error && (
          <Typography sx={{ color: 'error.main', mb: 2, fontSize: '14px' }}>
            {error}
          </Typography>
        )}
        <Button variant="contained" color="secondary" sx={{ width: '100%', mt: 2 }} onClick={handleLogin}>
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
