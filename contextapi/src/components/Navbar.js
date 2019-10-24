import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeUi";
// =============Accessing data from the context provider==================
// 'contextType' is only used in class based components

class Navbar extends Component {
	// We are saying the contextType we want to use is 'ThemeContext'
	//  This comp will now look up the comp tree to the 1st time it finds a Provider for this context(ThemeContext)
	// It will then take all the data attached to the value pty in the contextProvider and attaches it to a pty
	// context pty inside this comp as (this.context=data in the value pty)

	static contextType = ThemeContext;
	render() {
		const { isLightTheme, light, dark } = this.context;
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
	}
}

export default Navbar;
