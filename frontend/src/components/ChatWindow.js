import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import { Send, AttachFile, Image } from '@mui/icons-material';

const ChatWindow = ({ chat }) => {
  const [messages, setMessages] = useState(chat.messages || []);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        bgcolor: 'background.default',
        p: 3,
      }}
    >
      {/* Заголовок чата */}
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          color: 'text.primary',
          borderBottom: '1px solid #333',
          pb: 1,
        }}
      >
        {chat.name}
      </Typography>

      {/* История сообщений */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          mb: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {messages.map((msg, index) => (
          <Typography
            key={index}
            sx={{
              alignSelf: msg.sender === 'You' ? 'flex-end' : 'flex-start',
              bgcolor: msg.sender === 'You' ? 'primary.main' : 'secondary.main',
              color: '#fff',
              p: 1.5,
              borderRadius: '10px',
              maxWidth: '70%',
              wordBreak: 'break-word',
            }}
          >
            <strong>{msg.sender}: </strong>
            {msg.text}
          </Typography>
        ))}
      </Box>

      {/* Поле ввода сообщений */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderTop: '1px solid #333',
          pt: 2,
          mb: 3, // Добавим отступ снизу
        }}
      >
        <IconButton color="secondary">
          <Image />
        </IconButton>
        <IconButton color="secondary">
          <AttachFile />
        </IconButton>
        <TextField
          fullWidth
          multiline
          maxRows={3}
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '25px',
              bgcolor: 'background.paper',
              px: 2,
              height: '50px',
            },
          }}
        />
        <Button
          onClick={handleSendMessage}
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: '25px',
            height: '50px',
            width: '50px',
            minWidth: '50px',
          }}
        >
          <Send />
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;
