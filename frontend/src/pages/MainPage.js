import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';

const MainPage = ({ onLogout }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Header onLogout={onLogout} />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {/* Левая часть с поиском и списком чатов */}
        <Box
          sx={{
            width: '25%',
            borderRight: '1px solid #333',
            p: 2,
            bgcolor: 'background.paper',
          }}
        >
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ChatList searchQuery={searchQuery} setSelectedChat={setSelectedChat} />
        </Box>
        {/* Правая часть с окном чата */}
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            p: 2,
          }}
        >
          {selectedChat ? (
            <ChatWindow chat={selectedChat} />
          ) : (
            <Typography variant="h5" sx={{ color: 'text.secondary', m: 'auto' }}>
              Select a chat to start messaging
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
