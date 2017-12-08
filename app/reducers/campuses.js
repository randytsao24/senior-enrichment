// reducers/campuses.js

import axios from 'axios';

// Action types
const GET_CAMPUSES = 'GET_CAMPUSES';
const CREATE_NEW_CAMPUS = 'CREATE_NEW_CAMPUS';

// Action creators
export function getCampusesAction(campusList) {
	return {
		type: GET_CAMPUSES,
		campuses: campusList
	};
}

export function createNewCampusAction(campus) {
	return {
		type: CREATE_NEW_CAMPUS,
		newCampus: campus
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

export function createNewCampus(campus, history) {
	return function thunk(dispatch) {
		return axios.post('/api/campuses', campus)
			.then(res => res.data)
			.then(createdCampus => {
				const action = createNewCampusAction(createdCampus);
				dispatch(action);
				history.push(`/campuses/`)
			})
			.catch(console.error);
	}
}

// Reducer
export default function reducer(state = [], action) {
	switch (action.type) {
		case GET_CAMPUSES:
			return action.campuses;
		case CREATE_NEW_CAMPUS:
			return [...state, action.newCampus];
		default:
			return state;
	}
}
