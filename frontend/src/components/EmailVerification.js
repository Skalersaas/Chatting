import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const EmailVerification = () => {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    console.log('Verifying code:', code);
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
      <Typography variant="h5" gutterBottom>
        Email Verification
      </Typography>
      <Typography variant="body1" gutterBottom>
        Enter the verification code sent to your email:
      </Typography>
      <TextField
        label="Verification Code"
        variant="outlined"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="secondary" onClick={handleVerify}>
        Verify
      </Button>
    </Box>
  );
};

export default EmailVerification;
