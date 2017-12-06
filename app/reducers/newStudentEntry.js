// reducers/newStudentEntry.js

import axios from 'axios';

// Action types
const UPDATE_STUDENT_NAME_INPUT = 'UPDATE_STUDENT_NAME_INPUT';

// Action creators
export function updateStudentNameInputAction(studentName) {
	return {
		type: UPDATE_STUDENT_NAME_INPUT,
		newStudentEntry: studentName
	};
}

// Reducer
export default function reducer(state = '', action) {
	switch (action.type) {
		case UPDATE_STUDENT_NAME_INPUT:
			return action.newStudentEntry;
		default:
			return state;
	}
}