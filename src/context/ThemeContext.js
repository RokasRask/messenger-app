import React, { createContext, useState, useEffect } from 'react';

// Temų variantai
export const THEMES = {
  BLUE: 'blue',
  RED: 'red',
  GREEN: 'green',
  DARK: 'dark',
  PINK: 'pink',
  YELLOW: 'yellow'
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Nuskaitome temą iš localStorage, jei ji ten išsaugota, arba nustatome pradinę mėlyną
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('messenger-theme');
    return savedTheme || THEMES.BLUE;
  });

  // Keičiame temą ir išsaugome į localStorage
  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('messenger-theme', theme);
  };

  // Pritaikome temą visai dokumentui
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;