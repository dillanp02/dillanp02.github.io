import { HOME_LINK, ABOUT_LINK, CONTACT_LINK } from "./constants/url-links";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeContainer, ThemeButton } from "./components/ThemeSwitching";
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
import { Footer } from "./components/Navigation/Footer";
import AnimatedRoutes from "./pages/AnimatedRoutes";
import { useTheme } from "./components/Context/ThemeContext";

function App() {
	const { theme, updateTheme } = useTheme();

	const HandleThemeChange = (theme: any) => {
		updateTheme(theme);
		localStorage.setItem("current-theme", JSON.stringify(theme));
	};

	return (
		<>
			<GlobalStyles />
			<NavBar>
				<NavLink to={HOME_LINK}>Home</NavLink>
				<NavLink to={ABOUT_LINK}>About</NavLink>
				<NavLink to={CONTACT_LINK}>Contact</NavLink>
				<ThemeContainer>
					<ThemeButton
						className={`light ${theme === light ? "active" : ""}`}
						onClick={() => HandleThemeChange(light)}
					></ThemeButton>
					<ThemeButton
						className={`dark ${theme === dark ? "active" : ""}`}
						onClick={() => HandleThemeChange(dark)}
					></ThemeButton>
					<ThemeButton
						className={`blue ${theme === blue ? "active" : ""}`}
						onClick={() => HandleThemeChange(blue)}
					></ThemeButton>
					<ThemeButton
						className={`green ${theme === green ? "active" : ""}`}
						onClick={() => HandleThemeChange(green)}
					></ThemeButton>
					<ThemeButton
						className={`brown ${theme === brown ? "active" : ""}`}
						onClick={() => HandleThemeChange(brown)}
					></ThemeButton>
					<ThemeButton
						className={`pink ${theme === pink ? "active" : ""}`}
						onClick={() => HandleThemeChange(pink)}
					></ThemeButton>
				</ThemeContainer>
			</NavBar>

			<AnimatedRoutes />

			<Footer />
		</>
	);
}

export default App;
