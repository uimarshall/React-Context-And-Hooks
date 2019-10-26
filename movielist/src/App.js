import React from "react";

import "./App.css";
import MovieContextProvider from "./contexts/MovieContext";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";

function App() {
	return (
		<div className="App">
			<MovieContextProvider>
				<Navbar />
				<MovieList />
			</MovieContextProvider>
		</div>
	);
}

export default App;
