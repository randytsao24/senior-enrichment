// reducers/newStudentCampusSelection.js

import axios from 'axios';

// Action types
const UPDATE_STUDENT_CAMPUS_SELECTION = 'UPDATE_STUDENT_CAMPUS_SELECTION';

// Action creators
export function updateStudentCampusSelectionAction(campusId) {
	return {
		type: UPDATE_STUDENT_CAMPUS_SELECTION,
		selectedCampusId: campusId
	};
}

// Reducer
export default function reducer(state = -1, action) {
	switch (action.type) {
		case UPDATE_STUDENT_CAMPUS_SELECTION:
			return action.selectedCampusId;
		default:
			return state;
	}
}