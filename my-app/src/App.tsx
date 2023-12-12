import { HOME_LINK, ABOUT_LINK, CONTACT_LINK } from "./constants/url-links";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeContainer, ThemeButton } from "./components/ThemeSwitching";
import { NavLink } from "./components/Navigation/NavLink";
import { NavBar } from "./components/Navigation/Navbar";
import { Footer } from "./components/Navigation/Footer";
import AnimatedRoutes from "./pages/AnimatedRoutes";
import { useApplicationContext } from "./components/Context/AppContext";
import { THEME_LIST } from "./constants/global-constants";

function App() {
	const { theme, updateTheme } = useApplicationContext();

	return (
		<>
			<GlobalStyles />
			<NavBar>
				<NavLink to={HOME_LINK}>Home</NavLink>
				<NavLink to={ABOUT_LINK}>About</NavLink>
				<NavLink to={CONTACT_LINK}>Contact</NavLink>
				<ThemeContainer>
					{THEME_LIST.map((_theme) => {
						return (
							<ThemeButton
								onClick={() => updateTheme(_theme)}
								className={`${_theme.name} ${theme === _theme ? "active" : ""}`}
							></ThemeButton>
						);
					})}
				</ThemeContainer>
			</NavBar>

			<AnimatedRoutes />

			<Footer />
		</>
	);
}

export default App;
