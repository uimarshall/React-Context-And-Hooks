import React, { useContext } from "react";
// import { MovieContext } from "../contexts/MovieContext";
import { MovieContext1 } from "../contexts/MovieContext1";

const Navbar = () => {
	const { movies } = useContext(MovieContext1);
	return (
		<div className="navbar">
			<h1>My Movie List</h1>
			<p>Currently you have {movies.length} movies to watch dude...</p>
		</div>
	);
};

export default Navbar;
