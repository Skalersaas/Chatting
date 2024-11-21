import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import MainPage from './pages/MainPage';
import AccountSettings from './pages/AccountSettings';
import AppPreferences from './pages/AppPreferences';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false); // Выход из аккаунта
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {!isLoggedIn ? (
            <>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
              <Route path="/register" element={<RegistrationPage onRegister={() => setIsLoggedIn(true)} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<MainPage onLogout={handleLogout} />} />
              <Route
                path="/settings/account"
                element={<AccountSettings />}
              />
              <Route
                path="/settings/preferences"
                element={<AppPreferences />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
