import { Route, Routes, useLocation } from "react-router-dom";
import {
	ABOUT_LINK,
	HOME_LINK,
	SOCIAL_MEDIA_LINK,
	THEMES_LINK,
} from "../constants/url-links";
import SocialMedia from "./SocialMedia";
import Home from "./Home";
import About from "./About";
import ErrorPage from "./ErrorPage";
import { AnimatePresence } from "framer-motion";
import Themes from "./Themes";
import React from "react";

function AnimatedRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route index element={<Home />} />
				<Route path={HOME_LINK} element={<Home />} />
				<Route path={ABOUT_LINK} element={<About />} />
				<Route path={SOCIAL_MEDIA_LINK} element={<SocialMedia />} />
				<Route path={THEMES_LINK} element={<Themes />} />
				<Route
					path="*"
					element={<ErrorPage errorCode={404} errorMessage="Page not found" />}
				/>
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
