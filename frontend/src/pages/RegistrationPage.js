import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const RegistrationPage = ({ onRegister }) => {
  const handleRegister = () => {
    onRegister(true);
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
        Register
      </Typography>
      <Box sx={{ width: '300px' }}>
        <TextField
          fullWidth
          label="Name"
          sx={{ mb: 2 }}
          InputLabelProps={{ style: { color: 'text.secondary' } }}
        />
        <TextField
          fullWidth
          label="Email"
          sx={{ mb: 2 }}
          InputLabelProps={{ style: { color: 'text.secondary' } }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          sx={{ mb: 2 }}
          InputLabelProps={{ style: { color: 'text.secondary' } }}
        />
        <Button variant="contained" color="secondary" sx={{ width: '100%', mt: 2 }} onClick={handleRegister}>
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationPage;
