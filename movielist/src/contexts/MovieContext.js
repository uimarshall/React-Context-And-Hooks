// ========REQUIREMENTS==============
// 1. Create context - The context should provide data to its children
// 2. Define the data you want to transmit in the state - you can use 'useState hooks'
// 3. Create the context.Provider in the class or comp you want to export
// 4. The 'value' pty of the anycontext.Provider houses the data you want to transmit
// 5. You can create funcs and pass them as props to the children of the 'Provider' to drive services
// from the Provider to its children in comp folder, services such as add, delete, crud etc.
import React, { createContext, useState } from "react";
import uuid from "uuid/v1";
export const MovieContext = createContext();
const MovieContextProvider = props => {
	const [movies, setMovie] = useState([
		{ title: "New dawn", producer: "Van Bronchost", id: 1 },
		{ title: "The gipsy girl", producer: "Alan Smith", id: 2 },
		{ title: "Avatar", producer: "Sepp Baltter", id: 3 }
	]);
	const addMovie = (title, producer) => {
		// set the movie from the state obj to what we receive from the addMovie func.
		setMovie([...movies, { title: title, producer: producer, id: uuid() }]);
	};
	const removeMovie = id => {
		// keep the movie whose id is not equal to the id we are currently passing in the func
		setMovie(movies.filter(movie => movie.id !== id));
	};
	return (
		<MovieContext.Provider value={{ movies, addMovie, removeMovie }}>
			{/* 'props.children' refers to the 'comps' that 'MovieContextProvider' will wrap. */}
			{props.children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;
