// ============Creating context in functional comp======================

import React, { createContext, useState } from "react";
export const BookContext = createContext();

const BookContextProvider = props => {
	// use state to define some data
	const [books, setBooks] = useState([
		{ title: "Koku baboni", id: 1 },
		{ title: "Fairy tales", id: 2 },
		{ title: "No longer at ease", id: 3 },
		{ title: "The end game", id: 4 }
	]);
	return (
		// 'books' is transmitted to the children wrapped by the 'BookContextProvider'
		<BookContext.Provider value={{ books }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
