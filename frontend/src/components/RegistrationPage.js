import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Registering:', { name, email, phone, password });
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
        Register
      </Typography>
      <TextField
        label="Full Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          mb: 2,
          width: '300px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
          },
        }}
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          mb: 2,
          width: '300px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
          },
        }}
      />
      <TextField
        label="Phone Number"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        sx={{
          mb: 2,
          width: '300px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
          },
        }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{
          mb: 2,
          width: '300px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '10px',
          },
        }}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={handleRegister}
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
        Register
      </Button>
    </Box>
  );
};

export default Register;
