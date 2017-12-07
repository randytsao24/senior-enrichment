// reducers/newCampusEntry.js

// Action types
const UPDATE_CAMPUS_NAME_INPUT = 'UPDATE_CAMPUS_NAME_INPUT';

// Action creators
export function updateCampusNameInputAction(campusName) {
	return {
		type: UPDATE_CAMPUS_NAME_INPUT,
		newCampusEntry: campusName
	};
}

// Reducer
export default function reducer(state = '', action) {
	switch (action.type) {
		case UPDATE_CAMPUS_NAME_INPUT:
			return action.newCampusEntry;
		default:
			return state;
	}
}