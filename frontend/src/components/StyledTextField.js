import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

const StyledTextField = ({ label, type = 'text', value, onChange, icon }) => (
  <TextField
    label={label}
    type={type}
    value={value}
    onChange={onChange}
    InputProps={{
      startAdornment: icon && (
        <InputAdornment position="start">
          <i className={`fas fa-${icon}`} style={{ color: '#b0bec5', fontSize: '18px' }}></i>
        </InputAdornment>
      ),
    }}
    sx={{
      mb: 2,
      width: '300px',
      '& .MuiOutlinedInput-root': {
        position: 'relative',
        borderRadius: '10px',
        '& fieldset': {
          borderColor: 'secondary.main',
          transition: 'all 0.3s ease',
          borderWidth: '2px',
        },
        '&:hover fieldset': {
          borderColor: 'primary.light',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'primary.main',
          boxShadow: '0 0 5px rgba(30, 42, 56, 0.5)',
        },
      },
      '& .MuiInputLabel-root': {
        color: 'secondary.main',
        transition: 'color 0.3s, transform 0.3s',
        '&.Mui-focused': {
          color: 'primary.main',
        },
      },
      '& .MuiOutlinedInput-input': {
        zIndex: 1,
      },
    }}
  />
);

export default StyledTextField;
