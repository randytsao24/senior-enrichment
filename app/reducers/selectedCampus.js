// reducers/selectedCampus.js

import axios from 'axios';

// Action types
const GET_SELECTED_CAMPUS = 'GET_SELECTED_CAMPUS';

// Action creators
export function getSelectedCampusAction(campus) {
	return {
		type: GET_SELECTED_CAMPUSES,
		selectedCampus: campus
	};
}

// Thunk creators
export function getSelectedCampus() {
	return function thunk(dispatch) {
		return axios.get('/api/campuses')
			.then(res => res.data)
			.then(campuses => {
				const action = getCampusesAction(campuses);
				dispatch(action);
			})
			.catch(console.error);
	}
}

// Reducer
export default function reducer(state = {}, action) {
	switch (action.type) {
		case GET_SELECTED_CAMPUSES:
			return action.selectedCampus
		default:
			return state
	}
}