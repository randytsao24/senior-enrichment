// reducers/campuses.js

import axios from 'axios';

// Action types
const GET_CAMPUSES = 'GET_CAMPUSES';
const CREATE_NEW_CAMPUS = 'CREATE_NEW_CAMPUS';
const UPDATE_CAMPUSES = 'UPDATE_CAMPUSES';

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

export function updateStudentsAction(campuses) {
	return {
		type: UPDATE_CAMPUSES,
		updatedCampuses: campuses
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

export function updateCampus(id, type, newEntry) {
	return function thunk(dispatch) {
		// Initialize new object to what we want to update
		let campusUpdateObj = {
			type: Number(type),
			entry: newEntry
		};

		axios.put(`/api/campuses/${id}`, campusUpdateObj)
			.then(res => res.data)
			.then((updatedCampuses) => {
				const action = updateStudentsAction(updatedCampuses);
				dispatch(action);
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
		case UPDATE_CAMPUSES:
			return action.updatedCampuses;
		default:
			return state;
	}
}
