// ====================REACT HOOKS============================
// 1. They are special functions
// 2. They allow us to do additional stuff inside functional components e.g use 'state'
// 3. By using Hooks, we can noe access state in functional components

// ================SOME OF THE SPECIAL FUNCTIONS(HOOKS)===============
// 1. useState() - enable us use state within a functional component
// 2. useEffect() - enable us run code when a comp renders (or re-renders)-They are like lifecycle hooks
// 3. useContext() - enable us consume context in a functional component

import React from "react";
import PlayersList from "./components/PlayersList";

function App() {
	return (
		<div className="App">
			<PlayersList />
		</div>
	);
}

export default App;
