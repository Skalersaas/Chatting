import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#121212', // Очень тёмный фон
    },
    secondary: {
      main: '#1E88E5', // Яркий синий
    },
    background: {
      default: '#121212',
      paper: '#1F1F1F',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5',
    },
  },
});

export default theme;
