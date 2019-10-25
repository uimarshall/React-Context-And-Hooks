import React, { useState } from "react";

const NewPlayerForm = ({ addPlayer }) => {
	// 'addPlayer' is received as props
	// state = {
	// 	name: "" is represented in useState below
	// };
	const [name, setName] = useState("");
	const handleSubmit = e => {
		e.preventDefault();
		addPlayer(name);
		// Empty the field after submit
		setName("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="">Player name</label>
			<input
				type="text"
				value={name}
				id=""
				required
				onChange={e => {
					setName(e.target.value);
				}}
			/>
			<input type="submit" value="Add Player" />
		</form>
	);
};

export default NewPlayerForm;
