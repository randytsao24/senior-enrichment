// reducers/students.js

import axios from 'axios';

// Action types
const GET_STUDENTS = 'GET_STUDENTS';

// Action creators
export function getStudentsAction(studentList) {
	return {
		type: GET_STUDENTS,
		students: studentList
	};
}

// Thunk creators
export function getStudentList() {
	return function thunk(dispatch) {
		return axios.get('/api/students')
			.then(res => res.data)
			.then(students => {
				const action = getStudentsAction(students);
				dispatch(action);
			})
			.catch(console.error);
	}
}

// Reducer
export default function reducer(state = [], action) {
	switch (action.type) {
		case GET_STUDENTS:
			return action.students
		default:
			return state
	}
}