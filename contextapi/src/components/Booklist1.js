import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeUi";
import { BookContext } from "../contexts/BookContext";
const Booklist1 = () => {
	// Consuming context using 'useContext'
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const { books } = useContext(BookContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div
			className="book-list"
			style={{ background: theme.bg, color: theme.textcolor }}>
			<ul>
				{books.map(book => {
					return (
						<li key={book.is} style={{ background: theme.ui }}>
							{book.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Booklist1;
