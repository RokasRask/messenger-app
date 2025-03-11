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

  // Pritaikome temą visam dokumentui
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Tiesiogiai pritaikome spalvas iš temų (apeinama SCSS kompiliavimo problema)
    const applyThemeColors = () => {
      const themes = {
        blue: {
          primaryColor: '#0a6cff',
          primaryLight: '#4f9aff',
          primaryDark: '#0049cc',
          secondaryColor: '#eef5ff',
          textColor: '#1a2b47'
        },
        red: {
          primaryColor: '#e53935',
          primaryLight: '#ff5252',
          primaryDark: '#c62828',
          secondaryColor: '#fff5f5',
          textColor: '#3e2723'
        },
        green: {
          primaryColor: '#2e7d32',
          primaryLight: '#4caf50',
          primaryDark: '#1b5e20',
          secondaryColor: '#f1f8e9',
          textColor: '#1b5e20'
        },
        dark: {
          primaryColor: '#546e7a',
          primaryLight: '#78909c',
          primaryDark: '#37474f',
          secondaryColor: '#263238',
          textColor: '#eceff1'
        },
        pink: {
          primaryColor: '#c2185b',
          primaryLight: '#f48fb1',
          primaryDark: '#880e4f',
          secondaryColor: '#fce4ec',
          textColor: '#4a148c'
        },
        yellow: {
          primaryColor: '#f9a825',
          primaryLight: '#ffd54f',
          primaryDark: '#f57f17',
          secondaryColor: '#fffde7',
          textColor: '#5d4037'
        }
      };
      
      const theme = themes[currentTheme] || themes.blue;
      
      // Patikriname, ar stiliai jau buvo sukurti
      let styleElement = document.getElementById('theme-colors');
      
      if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'theme-colors';
        document.head.appendChild(styleElement);
      }
      
      // Sukuriame dinaminius stilius
      styleElement.innerHTML = `
        :root {
          --primary-color: ${theme.primaryColor};
          --primary-light: ${theme.primaryLight};
          --primary-dark: ${theme.primaryDark};
          --text-color: ${theme.textColor};
          --secondary-color: ${theme.secondaryColor};
        }
      `;
    };
    
    applyThemeColors();
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme, THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;