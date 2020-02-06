// ==========Here we will use 'REDUCERS' to manage the state================
// The reducer interracts wt the state nd updata the data based on the type of actn dispatch to it.
// The action usually include the 'actn-type' and the 'payload' - the data we want to update the state with
// The reducer will den look at the actn type, then run a func to update the state by
// either adding or removing frm the state as the case may be
/* Instead of passing our functions such 'addMovie', 'deleteMovie' to the 'value' pty of the 
'contextProvider' we pass in 'dispatch' mtd provided by the 'useReducer' mtd 
which will dispatch all the funcs from the 'Action Creators'*/
import React, { createContext, useReducer, useEffect } from "react";
// import uuid from "uuid/v1";
import { movieReducer } from "../reducers/movieReducer";
export const MovieContext1 = createContext();
const MovieContextProvider = props => {
	// We will use the 'movieReducer' to manage the state
	const [movies, dispatch] = useReducer(movieReducer, [], () => {
		const localData = localStorage.getItem("movies");
		// The value of what the func returns, will be the initial value of the books in 1st render
		// The callback func updates the 'movies' wt content of the localStorage
		return localData ? JSON.parse(localData) : [];
	});
	// Implement localStorage
	// Whenever the 'movies' obj changes/updates run the 'useEffect' hook
	useEffect(() => {
		// effect - store a json object calles "movies" in the localStorage
		localStorage.setItem("movies", JSON.stringify(movies));
	}, [movies]);

	return (
		// All the comps consuming this context will hv access to 'dispatch' mtd to dispatch actns
		<MovieContext1.Provider value={{ movies, dispatch }}>
			{" "}
			{/* 'props.children' refers to the 'comps' that 'MovieContextProvider' will wrap. */}{" "}
			{props.children}{" "}
		</MovieContext1.Provider>
	);
};

export default MovieContextProvider;
