import React from 'react';
import { Box, Typography, Switch, FormControlLabel, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AppPreferences = () => {
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
        App Preferences
      </Typography>
      <Box sx={{ width: '300px' }}>
        <FormControlLabel
          control={<Switch />}
          label="Enable Dark Mode"
          disabled
          sx={{ mb: 2 }}
        />
        <FormControlLabel
          control={<Switch />}
          label="Enable Push Notifications"
          sx={{ mb: 2 }}
        />
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

export default AppPreferences;
