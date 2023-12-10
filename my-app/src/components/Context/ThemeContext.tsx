import {
	createContext,
	useContext,
	ReactNode,
	Dispatch,
	SetStateAction,
	useState,
} from "react";
import { dark } from "../styles/ThemeStyles";
import { ThemeProvider } from "styled-components";

//

interface ThemeContextType {
	theme: typeof dark;
	updateTheme: Dispatch<SetStateAction<typeof dark>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
	children: ReactNode;
}

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

export const CustomThemeProvider = ({ children }: ThemeProviderProps) => {
	const currentTheme = JSON.parse(
		localStorage.getItem("current-theme") as string
	);
	const [theme, setTheme] = useState(currentTheme || dark);

	const updateTheme: ThemeContextType["updateTheme"] = (newTheme) => {
		setTheme(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, updateTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	);
};
