import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { Settings, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Header = ({ onLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    onLogout();
    navigate('/'); // Перенаправление на WelcomePage
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'background.paper', color: 'text.primary' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          CHATTING
        </Typography>
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <Settings />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={() => navigate('/settings/account')}>Account Settings</MenuItem>
          <MenuItem onClick={() => navigate('/settings/preferences')}>App Preferences</MenuItem>
          <MenuItem onClick={handleLogout}>
            <Logout sx={{ mr: 1 }} />
            Log Out
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
