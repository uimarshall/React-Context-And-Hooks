import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const MovieInfo = ({ movie }) => {
	const { removeMovie } = useContext(MovieContext);
	return (
		<li
			onClick={() => {
				removeMovie(movie.id);
			}}>
			<div className="title">{movie.title}</div>
			<div className="producer">{movie.producer}</div>
		</li>
	);
};

export default MovieInfo;
