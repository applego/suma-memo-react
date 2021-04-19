import React, { useState } from 'react';
import { darkTheme, defaultTheme, navyTheme, mTheme } from '.';

export const ThemeContext = React.createContext({
  theme: null,
  handleThemeChange: () => {},
});

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(mTheme);

  const handleThemeChange = (themeName) => {
    localStorage.setItem('theme', themeName);
    switch (themeName) {
      case 'DEFAULT':
        // setTheme(defaultTheme);
        setTheme(mTheme);
        break;
      case 'DARK':
        setTheme(darkTheme);
        break;
      // case 'NAVY':
      //   setTheme(navyTheme);
      //   break;
      // case 'MTHEME':
      //   setTheme(mTheme);
      //   break;
      default:
        // setThme(defaultTheme);
        setTheme(mTheme);
        break;
    }
  };

  return (
    <ThemeContext.Provider
      value={{ handleThemeChange: handleThemeChange, theme: theme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
