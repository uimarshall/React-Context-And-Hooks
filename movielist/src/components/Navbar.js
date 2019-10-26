import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Navbar = () => {
	const { movies } = useContext(MovieContext);
	return (
		<div className="navbar">
			<h1>My Movie List</h1>
			<p>Currently you have {movies.length} movies to watch dude...</p>
		</div>
	);
};

export default Navbar;
