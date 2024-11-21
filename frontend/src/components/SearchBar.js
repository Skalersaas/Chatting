import React from 'react';
import { TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder="Search contacts..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      sx={{
        bgcolor: 'secondary.main',
        borderRadius: '25px',
        width: '100%',
        mb: 2,
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'transparent',
          },
          '&:hover fieldset': {
            borderColor: 'primary.light',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <Search sx={{ mr: 1, color: 'primary.main' }} />
        ),
      }}
    />
  );
};

export default SearchBar;
