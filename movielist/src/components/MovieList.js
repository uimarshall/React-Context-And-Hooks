import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import MovieInfo from "./MovieInfo";

const MovieList = () => {
	const { movies } = useContext(MovieContext);
	return movies.length ? (
		<div className="movie-list">
			<ul>
				{movies.map(movie => {
					return <MovieInfo movie={movie} key={movie.id} />;
				})}
			</ul>
		</div>
	) : (
		<div className="empty">No movies available to watch dude....</div>
	);
};

export default MovieList;
