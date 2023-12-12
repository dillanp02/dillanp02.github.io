import {
	createContext,
	useContext,
	ReactNode,
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
} from "react";
import { dark } from "../styles/ThemeStyles";
import { ThemeProvider } from "styled-components";
import { MOBILE_RESPONSIVE_SIZE } from "../../constants/css-constants";

//

interface AppContextType {
	updateTheme: Dispatch<SetStateAction<typeof dark>>;
	isMobile: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
	children: ReactNode;
}

export const useApplicationContext = (): AppContextType => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

export const AppContextProvider = ({ children }: AppProviderProps) => {
	const currentTheme = JSON.parse(
		localStorage.getItem("current-theme") as string
	);
	const [theme, setTheme] = useState(currentTheme || dark);

	const updateTheme: AppContextType["updateTheme"] = (newTheme) => {
		setTheme(newTheme);
		localStorage.setItem("current-theme", JSON.stringify(newTheme));
	};

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= parseInt(MOBILE_RESPONSIVE_SIZE, 10));
		};

		handleResize(); // Set initial state

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<AppContext.Provider value={{ updateTheme, isMobile }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</AppContext.Provider>
	);
};
