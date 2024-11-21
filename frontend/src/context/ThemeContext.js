import React, { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '../styles/theme'; // Подключаем темы

// Создаём контекст
const ThemeContext = createContext();

// Провайдер для управления темами
export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Выбираем тему на основе состояния
  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  // Функция для переключения темы
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Хук для использования контекста
export const useThemeContext = () => useContext(ThemeContext);
