import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { AppContextProvider } from "./components/Context/AppContext";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<HashRouter>
			<AppContextProvider>
				<App />
			</AppContextProvider>
		</HashRouter>
	</React.StrictMode>
);
