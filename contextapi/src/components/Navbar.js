import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeUi";
import { AuthContext } from "../contexts/AuthContext";
// =============Accessing data from the context provider==================
// 'contextType' is only used in class based components

class Navbar extends Component {
	// We are saying the contextType we want to use is 'ThemeContext'
	//  This comp will now look up the comp tree to the 1st time it finds a Provider for this context(ThemeContext)
	// It will then take all the data attached to the value pty in the contextProvider and attaches it to a pty
	// context pty inside this comp as (this.context=data in the value pty)

	// static contextType = ThemeContext;
	// render() {
	// 	const { isLightTheme, light, dark } = this.context;
	// 	const theme = isLightTheme ? light : dark;
	// 	return (
	// 		<nav style={{ background: theme.ui, color: theme.text }}>
	// 			<h1>Context Api</h1>
	// 			<ul>
	// 				<li>Home</li>
	// 				<li>About</li>
	// 				<li>Contact</li>
	// 			</ul>
	// 		</nav>
	// 	);
	// }
	render() {
		// const { isLightTheme, light, dark } = this.context;
		// const theme = isLightTheme ? light : dark;
		return (
			// Using consumer as another method of consuming the context
			// consumer can also be used in a functional comp, and we can consume multiple context unlike 'contextType'
			<AuthContext.Consumer>
				{authContext => {
					return (
						<ThemeContext.Consumer>
							{themeContext => {
								const { isAuthenticated, toggleAuth } = authContext;
								const { isLightTheme, light, dark } = themeContext;
								const theme = isLightTheme ? light : dark;
								return (
									<nav style={{ background: theme.ui, color: theme.text }}>
										<h1>Context Api</h1>
										<div onClick={toggleAuth}>
											{isAuthenticated ? "Logged In" : "Logged Out"}
										</div>
										<ul>
											<li>Home</li>
											<li>About</li>
											<li>Contact</li>
										</ul>
									</nav>
								);
							}}
						</ThemeContext.Consumer>
					);
				}}
			</AuthContext.Consumer>
		);
	}
}

export default Navbar;
