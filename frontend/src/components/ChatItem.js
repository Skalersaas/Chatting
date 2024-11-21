import React from 'react';
import { Box, Typography, Badge } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Check } from '@mui/icons-material';

const ChatItem = ({ name, lastMessage, hasNewMessage, status, onClick }) => {
  const renderStatusIcon = () => {
    if (status === 'sent') {
      return <Check sx={{ color: 'gray' }} />;
    }
    if (status === 'delivered') {
      return (
        <>
          <Check sx={{ color: 'gray' }} />
          <Check sx={{ color: 'gray' }} />
        </>
      );
    }
    if (status === 'read') {
      return (
        <>
          <Check sx={{ color: 'blue' }} />
          <Check sx={{ color: 'blue' }} />
        </>
      );
    }
    return null;
  };

  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 2,
        py: 1,
        cursor: 'pointer',
        borderBottom: '1px solid #ccc',
        '&:hover': {
          bgcolor: 'primary.light',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <AccountCircleIcon fontSize="large" sx={{ color: '#fff', mr: 2 }} />
        <Box>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'secondary.light' }}>
            {lastMessage}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {hasNewMessage && <Badge color="error" variant="dot" />}
        {renderStatusIcon()}
      </Box>
    </Box>
  );
};

export default ChatItem;
