import uuid from "uuid/v1";
// All the logic to manipulate our state lies in the 'reducer'
// The Reducer reduces all the functions needed to manipulate our state to
// a single function(such as addMovie), hence the name reducer.
export const movieReducer = (state, action) => {
	switch (action.type) {
		case "ADD_MOVIE":
			return [
				...state,
				{
					title: action.movie.title,
					producer: action.movie.producer,
					id: uuid()
				}
			];
		case "REMOVE_MOVIE":
			return state.filter(movie => movie.id !== action.id);
		default:
			return state;
	}
};
