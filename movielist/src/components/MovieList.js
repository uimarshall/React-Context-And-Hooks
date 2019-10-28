import React, { useContext } from "react";
// import { MovieContext } from "../contexts/MovieContext";
import { MovieContext1 } from "../contexts/MovieContext1";
// import MovieInfo from "./MovieInfo";
import MovieInfo1 from "./MovieInfo1";

const MovieList = () => {
	// const { movies } = useContext(MovieContext);
	const { movies } = useContext(MovieContext1);
	return movies.length ? (
		<div className="movie-list">
			<ul>
				{movies.map(movie => {
					return <MovieInfo1 movie={movie} key={movie.id} />;
				})}
			</ul>
		</div>
	) : (
		<div className="empty">No movies available to watch dude....</div>
	);
};

export default MovieList;
