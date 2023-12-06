import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import {
	HOME_LINK,
	ABOUT_LINK,
	CONTACT_LINK,
	SOCIAL_MEDIA_LINK,
} from "./constants/url-links";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeContainer, ThemeButton } from "./components/ThemeSwitching";
import { ThemeProvider } from "styled-components";
import {
	light,
	dark,
	blue,
	green,
	brown,
	pink,
} from "./components/styles/ThemeStyles";
import { NavLink } from "./components/Navigation/NavLink";
import { NavBar } from "./components/Navigation/Navbar";
import SocialMedia from "./pages/SocialMedia";

function App() {
	const [selectedTheme, setSelectedTheme] = useState(dark);
	// react hook to get the theme selected by the user that is saved in local storage
	useEffect(() => {
		const currentTheme = JSON.parse(
			localStorage.getItem("current-theme") as string
		);
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
			<NavBar>
				<NavLink to={HOME_LINK}>Home</NavLink>
				<NavLink to={ABOUT_LINK}>About</NavLink>
				<NavLink to={CONTACT_LINK}>Contact</NavLink>
				<ThemeContainer>
					<ThemeButton
						className={`light ${selectedTheme === light ? "active" : ""}`}
						onClick={() => HandleThemeChange(light)}
					></ThemeButton>
					<ThemeButton
						className={`dark ${selectedTheme === dark ? "active" : ""}`}
						onClick={() => HandleThemeChange(dark)}
					></ThemeButton>
					<ThemeButton
						className={`blue ${selectedTheme === blue ? "active" : ""}`}
						onClick={() => HandleThemeChange(blue)}
					></ThemeButton>
					<ThemeButton
						className={`green ${selectedTheme === green ? "active" : ""}`}
						onClick={() => HandleThemeChange(green)}
					></ThemeButton>
					<ThemeButton
						className={`brown ${selectedTheme === brown ? "active" : ""}`}
						onClick={() => HandleThemeChange(brown)}
					></ThemeButton>
					<ThemeButton
						className={`pink ${selectedTheme === pink ? "active" : ""}`}
						onClick={() => HandleThemeChange(pink)}
					></ThemeButton>
				</ThemeContainer>
			</NavBar>

			<Routes>
				<Route index element={<Home />} />
				<Route path={HOME_LINK} element={<Home />} />
				<Route path={ABOUT_LINK} element={<About />} />
				<Route path={CONTACT_LINK} element={<Contact />} />
				<Route path={SOCIAL_MEDIA_LINK} element={<SocialMedia />} />
				<Route
					path="*"
					element={<ErrorPage errorCode={404} errorMessage="Page not found" />}
				/>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
