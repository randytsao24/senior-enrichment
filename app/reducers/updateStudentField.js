// reducers/updateField.js

// Action types
const UPDATE_STUDENT_FIRST_NAME = 'UPDATE_STUDENT_FIRST_NAME';
const UPDATE_STUDENT_LAST_NAME = 'UPDATE_STUDENT_LAST_NAME';
const UPDATE_STUDENT_EMAIL = 'UPDATE_STUDENT_NAME';
const UPDATE_STUDENT_GPA = 'UPDATE_STUDENT_NAME';
const UPDATE_STUDENT_CAMPUS = 'UPDATE_STUDENT_CAMPUS';

// Action creators
export function updateStudentFirstNameAction(name) {
	return {
		type: UPDATE_STUDENT_FIRST_NAME,
		newFirstName: name
	};
}

export function updateStudentLastNameAction(name) {
	return {
		type: UPDATE_STUDENT_LAST_NAME,
		newLastName: name
	};
}
export function updateStudentEmailAction(email) {
	return {
		type: UPDATE_STUDENT_EMAIL,
		newEmail: email
	};
}

export function updateStudentGpaAction(gpa) {
	return {
		type: UPDATE_STUDENT_GPA,
		newGpa: gpa
	};
}

export function updateStudentCampusAction(campusId) {
	return {
		type: UPDATE_CAMPUS_NAME_INPUT,
		newCampusId: Number(campusId)
	};
}

// Thunk creators
export function updateStudent(type, newEntry, history) {
	return function thunk(dispatch) {

		// Initialize student object according to specified field
		// we're changing
		

		return axios.put('/api/students', newEntry)
			.then(res => res.data)
			.then(updatedStudent => {
				const action = updateStudentFirstNameAction(newEntry);
				dispatch(action);
				history.push(`/students/`);
			})
			.catch(console.error);
	}
}

// Reducer
export default function reducer(state = '', action) {
	switch (action.type) {
		case UPDATE_STUDENT_FIRST_NAME:
			return action.newCampusEntry;
		default:
			return state;
	}
}