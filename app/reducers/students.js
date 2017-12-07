// reducers/students.js

import axios from 'axios';

// Action types
const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT'

// Action creators
export function getStudentsAction(studentList) {
	return {
		type: GET_STUDENTS,
		students: studentList
	};
}

export function createStudentAction(student) {
	return {
		type: CREATE_NEW_STUDENT,
		newStudent: student
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

export function createStudent(student, history) {
	return function thunk(dispatch) {
		return axios.post('/api/students', student)
			.then(res => res.data)
			.then(createdStudent => {
				const action = createStudentAction(createdStudent);
				dispatch(action);
				history.push(`/students/`);
			})
			.catch(console.error);
	}
}

// Reducer
export default function reducer(state = [], action) {
	switch (action.type) {
		case GET_STUDENTS:
			return action.students;
		case CREATE_NEW_STUDENT:
			return [...state, action.newStudent];
		default:
			return state
	}
}