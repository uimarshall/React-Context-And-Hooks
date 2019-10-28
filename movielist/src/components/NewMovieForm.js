import React, { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";

const NewMovieForm = () => {
	const { addMovie } = useContext(MovieContext);
	const [title, setTitle] = useState("");
	const [producer, setProducer] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		addMovie(title, producer);
		setTitle("");
		setProducer("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name=""
				placeholder="movie title"
				value={title}
				onChange={e => {
					setTitle(e.target.value);
				}}
			/>
			<input
				type="text"
				name=""
				placeholder="producer"
				value={producer}
				onChange={e => {
					setProducer(e.target.value);
				}}
			/>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default NewMovieForm;
