import React from "react";

import "./App.css";
// import MovieContextProvider from "./contexts/MovieContext";
import MovieContextProvider from "./contexts/MovieContext1";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
// import NewMovieForm from "./components/NewMovieForm";
import NewMovieForm1 from "./components/NewMovieForm1";

function App() {
	return (
		<div className="App">
			<MovieContextProvider>
				<Navbar />
				<MovieList />
				{/* <NewMovieForm /> */}
				<NewMovieForm1 />
			</MovieContextProvider>
		</div>
	);
}

export default App;
