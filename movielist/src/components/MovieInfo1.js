import React, { useContext } from "react";
import { MovieContext1 } from "../contexts/MovieContext1";

const MovieInfo1 = ({ movie }) => {
	const { dispatch } = useContext(MovieContext1);
	return (
		<li
			onClick={() => {
				dispatch({ type: "REMOVE_MOVIE", id: movie.id });
			}}>
			<div className="title">{movie.title}</div>
			<div className="producer">{movie.producer}</div>
		</li>
	);
};

export default MovieInfo1;
