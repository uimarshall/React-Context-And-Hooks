import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeUi";
class Booklist extends Component {
	// static contextType = ThemeContext;

	render() {
		// const { isLightTheme, light, dark } = this.context;
		// const theme = isLightTheme ? light : dark;
		return (
			// Using consumer as another method of consuming the context
			// consumer can also be used in a functional comp, and we can consume multiple context unlike 'contextType'
			<ThemeContext.Consumer>
				{context => {
					const { isLightTheme, light, dark } = context;
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
				}}
			</ThemeContext.Consumer>
		);
	}
}

export default Booklist;
