import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeUi";
const Booklist2 = () => {
	// Consuming context using 'useContext'
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div
			className="book-list"
			style={{ background: theme.bg, color: theme.textcolor }}>
			<ul>
				<li style={{ background: theme.ui }}>the narrow way</li>
				<li style={{ background: theme.ui }}>sleepy hollow</li>
				<li style={{ background: theme.ui }}>spiderman in manger</li>
			</ul>
		</div>
	);
};

export default Booklist2;
