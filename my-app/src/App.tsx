import {
	HOME_LINK,
	ABOUT_LINK,
	SOCIAL_MEDIA_LINK,
} from "./constants/url-links";
import { GlobalStyles } from "./components/styles/Global";
import { ThemeButton } from "./components/Buttons/ThemeSwitchingButtons";
import { NavLink } from "./components/Navigation/NavLink";
import { NavBar } from "./components/Navigation/Navbar";
import { Footer } from "./components/Navigation/Footer";
import AnimatedRoutes from "./pages/AnimatedRoutes";
import { useApplicationContext } from "./components/Context/AppContext";
import { THEME_LIST } from "./constants/global-constants";
import { ThemeContainer } from "./components/Containers/ThemeContainer";
import { AppContainer } from "./components/Containers/AppContainer";

function App() {
	const { updateTheme } = useApplicationContext();

	return (
		<AppContainer>
			<GlobalStyles />
			<NavBar>
				<NavLink to={HOME_LINK}>Home</NavLink>
				<NavLink to={ABOUT_LINK}>About</NavLink>
				<NavLink to={SOCIAL_MEDIA_LINK}>Contact</NavLink>
				<ThemeContainer $forcerow>
					{THEME_LIST.map((_theme, index) => {
						return (
							<ThemeButton
								key={index}
								onClick={() => updateTheme(_theme)}
								themename={_theme.name}
								bgcolor={_theme.colors.background}
								bordercolor={_theme.colors.border}
							></ThemeButton>
						);
					})}
				</ThemeContainer>
			</NavBar>

			<AnimatedRoutes />

			<Footer />
		</AppContainer>
	);
}

export default App;
