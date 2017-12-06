// reducers/campuses.js

import axios from 'axios';

// Action types
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_SELECTED_CAMPUS = 'GET_SELECTED_CAMPUS';

// Action creators
export function getCampusesAction(campusList) {
	return {
		type: GET_CAMPUSES,
		campuses: campusList
	};
}

// Thunk creators
export function getCampusList() {
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
export default function reducer(state = [], action) {
	switch (action.type) {
		case GET_CAMPUSES:
			return action.campuses
		default:
			return state
	}
}