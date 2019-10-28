import React, { useContext, useState } from "react";
import { MovieContext1 } from "../contexts/MovieContext1";
const NewMovieForm1 = () => {
	const { dispatch } = useContext(MovieContext1);
	const [title, setTitle] = useState("");
	const [producer, setProducer] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		dispatch({
			type: "ADD_MOVIE",
			movie: { title: title, producer: producer }
		});
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

export default NewMovieForm1;
