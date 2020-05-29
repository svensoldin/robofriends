import ActionTypes from './action.types.js';

export const setSearchField = (text) => ({
	type: ActionTypes.CHANGE_SEARCHFIELD,
	payload: text,
});

export const requestRobots = () => (dispatch) => {
	dispatch({ type: ActionTypes.REQUEST_ROBOTS_START });
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((data) => dispatch({ type: ActionTypes.REQUEST_ROBOTS_SUCCESS, payload: data }))
		.catch((err) => dispatch({ type: ActionTypes.REQUEST_ROBOTS_FAILURE, payload: err }));
};
