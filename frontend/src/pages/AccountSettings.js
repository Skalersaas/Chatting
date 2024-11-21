import React from 'react';
import { Box, Typography, TextField, Button, Switch, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccountSettings = () => {
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
      <Typography variant="h4" sx={{ mb: 3, color: 'text.primary' }}>
        Account Settings
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
        <FormControlLabel
          control={<Switch />}
          label="Receive Email Notifications"
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: '100%', mt: 2 }}
        >
          Save Changes
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ width: '100%', mt: 2 }}
          onClick={() => navigate('/')}
        >
          Back to Main Page
        </Button>
      </Box>
    </Box>
  );
};

export default AccountSettings;
