import React from 'react';
import { List } from '@mui/material';
import ChatItem from './ChatItem';

const mockChats = [
  {
    id: 1,
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    hasNewMessage: true,
    status: 'read',
    messages: [
      { sender: 'John Doe', text: 'Hey, how are you?' },
      { sender: 'You', text: 'I am good, thank you!' },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    lastMessage: 'Got it!',
    hasNewMessage: false,
    status: 'delivered',
    messages: [
      { sender: 'Jane Smith', text: 'Can we meet tomorrow?' },
      { sender: 'You', text: 'Sure, see you at 10 AM!' },
    ],
  },
];

const ChatList = ({ searchQuery, setSelectedChat }) => {
  const filteredChats = searchQuery
    ? mockChats.filter((chat) =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockChats;

  return (
    <List>
      {filteredChats.map((chat) => (
        <ChatItem
          key={chat.id}
          name={chat.name}
          lastMessage={chat.lastMessage}
          hasNewMessage={chat.hasNewMessage}
          status={chat.status}
          onClick={() => setSelectedChat(chat)}
        />
      ))}
    </List>
  );
};

export default ChatList;
