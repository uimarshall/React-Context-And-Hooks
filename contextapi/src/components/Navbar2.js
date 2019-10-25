import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeUi";
import { AuthContext } from "../contexts/AuthContext";

const Navbar2 = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const { isAuthenticated, toggleAuth } = useContext(AuthContext);
	const theme = isLightTheme ? light : dark;
	return (
		<nav style={{ background: theme.ui, color: theme.text }}>
			<h1>Context Api</h1>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar2;
