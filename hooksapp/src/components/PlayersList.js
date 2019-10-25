import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewPlayerForm from "./NewPlayerForm";

const PlayersList = () => {
	// The useState contains 2 parameters: the 'dat'a and d 'func' to manipulate the data
	// The data is the initState
	// we destructure the data & the function
	// In this example, 'players' = initstate, while 'setPlayers' = setState();

	const [players, setPlayers] = useState([
		{ name: "Ronaldo", id: 1 },
		{ name: "Messi", id: 2 },
		{ name: "Rashford", id: 3 },
		{ name: "Rooney", id: 4 }
	]);
	// addPlayer takes 'name' parameter and updates the state.
	const addPlayer = name => {
		setPlayers([...players, { name: name, id: uuid() }]);
	};
	// The callback func runs once the comp renders/re-renders i.e when d data inside d comp changes
	// U could use useEffect to communicate wt d database or call an API
	useEffect(() => {
		console.log("useEffect ran", players);
	}, [players]);
	return (
		<div className="player-list">
			<ul>
				{players.map(player => {
					return <li key={player.id}>{player.name}</li>;
				})}
			</ul>
			{/* <button onClick={addPlayer}>Add Players</button> */}
			{/* 'addPlayer' is passed as props to 'NewPlayerForm' */}
			<NewPlayerForm addPlayer={addPlayer} />
		</div>
	);
};

export default PlayersList;
