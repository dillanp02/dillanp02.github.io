import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import { HOME_LINK, ABOUT_LINK, CONTACT_LINK } from './constants/url-links';
import { GlobalStyles } from './components/styles/Global';
import { ThemeContainer, ThemeButton } from "./components/styles/ThemeSwitching.styled";
import { ThemeProvider } from 'styled-components';
import {
  light,
  dark,
  blue,
  green,
  brown,
  pink,
} from "./components/styles/ThemeStyles";



function App() {

  const [selectedTheme, setSelectedTheme] = useState(light);

  // react hook to get the theme selected by the user that is saved in local storage
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme") as string);
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);


  const HandleThemeChange = (theme: any) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  return (
    <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <Navbar/>

        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton
            className={`light ${selectedTheme === light ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}>
          </ThemeButton>
          <ThemeButton
            className={`dark ${selectedTheme === dark ? "active" : ""}`}
            onClick={() => HandleThemeChange(dark)}>
          </ThemeButton>
          <ThemeButton
            className={`blue ${selectedTheme === blue ? "active" : ""}`}
            onClick={() => HandleThemeChange(blue)}>
          </ThemeButton>
          <ThemeButton
            className={`green ${selectedTheme === green ? "active" : ""}`}
            onClick={() => HandleThemeChange(green)}>
          </ThemeButton>
          <ThemeButton
            className={`brown ${selectedTheme === brown ? "active" : ""}`}
            onClick={() => HandleThemeChange(brown)}>
          </ThemeButton>
          <ThemeButton
            className={`pink ${selectedTheme === pink ? "active" : ""}`}
            onClick={() => HandleThemeChange(pink)}>
          </ThemeButton>
        </ThemeContainer>

        <Routes>
          <Route index element={<Home />} />
          <Route path={HOME_LINK} element={<Home />} />
          <Route path={ABOUT_LINK} element={<About />} />
          <Route path={CONTACT_LINK} element={<Contact />} />
          <Route path="*" element={<ErrorPage errorCode={404} errorMessage='Page not found'/>} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
