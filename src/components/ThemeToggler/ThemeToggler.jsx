import React, { useContext, useState } from 'react';
import { ThemeContext, THEMES } from '../../context/ThemeContext';
import './ThemeToggler.scss';

const ThemeToggler = () => {
  const { currentTheme, changeTheme, THEMES } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme) => {
    changeTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className="theme-toggler">
      <button 
        className="theme-toggler__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Keisti temą"
      >
        <span className="theme-toggler__icon">🎨</span>
        <span className="theme-toggler__text">Tema</span>
      </button>
      
      {isOpen && (
        <div className="theme-toggler__dropdown">
          <div className="theme-toggler__options">
            <button
              className={`theme-option theme-option--blue ${currentTheme === THEMES.BLUE ? 'active' : ''}`}
              onClick={() => handleThemeChange(THEMES.BLUE)}
            >
              <span className="theme-option__color"></span>
              <span className="theme-option__name">Mėlyna</span>
            </button>
            <button
              className={`theme-option theme-option--red ${currentTheme === THEMES.RED ? 'active' : ''}`}
              onClick={() => handleThemeChange(THEMES.RED)}
            >
              <span className="theme-option__color"></span>
              <span className="theme-option__name">Raudona</span>
            </button>
            <button
              className={`theme-option theme-option--green ${currentTheme === THEMES.GREEN ? 'active' : ''}`}
              onClick={() => handleThemeChange(THEMES.GREEN)}
            >
              <span className="theme-option__color"></span>
              <span className="theme-option__name">Žalia</span>
            </button>
            <button
              className={`theme-option theme-option--dark ${currentTheme === THEMES.DARK ? 'active' : ''}`}
              onClick={() => handleThemeChange(THEMES.DARK)}
            >
              <span className="theme-option__color"></span>
              <span className="theme-option__name">Tamsi</span>
            </button>
            <button
              className={`theme-option theme-option--pink ${currentTheme === THEMES.PINK ? 'active' : ''}`}
              onClick={() => handleThemeChange(THEMES.PINK)}
            >
              <span className="theme-option__color"></span>
              <span className="theme-option__name">Rožinė</span>
            </button>
            <button
              className={`theme-option theme-option--yellow ${currentTheme === THEMES.YELLOW ? 'active' : ''}`}
              onClick={() => handleThemeChange(THEMES.YELLOW)}
            >
              <span className="theme-option__color"></span>
              <span className="theme-option__name">Geltona</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggler;