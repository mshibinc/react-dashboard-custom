import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { MyThemeProvider, themeDark } from "./components/library";

import MainWraper from "./components/Wrapper";

export default () => {
  const [theme, setTheme] = useState({});

  const handleThemeSet = (activeTheme) => {
    console.log("handleThemeSet", activeTheme);

    localStorage.setItem("sensei-theme", activeTheme.id);
    setTheme({
      ...activeTheme,
    });
  };

  const handleFontSet = (activeFont) => {
    localStorage.setItem("sensei-font", activeFont);
    setTheme({
      ...theme,
      fontFamily: activeFont,
    });
  };

  return (
    <MyThemeProvider
      theme={theme}
      localStorageTheme={localStorage.getItem("sensei-theme")}
      localStorageFont={localStorage.getItem("sensei-font")}
      setTheme={handleThemeSet}
      preloaderClassName="theme-loading"
    >
      <Router>
        <MainWraper setTheme={handleThemeSet} setFont={handleFontSet} />
      </Router>
    </MyThemeProvider>
  );
};
