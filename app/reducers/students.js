// reducers/students.js

import axios from 'axios';

// Action types
const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT';
const UPDATE_STUDENTS = 'UPDATE_STUDENTS';
const UPDATE_STUDENT_FIRST_NAME = 'UPDATE_STUDENT_FIRST_NAME';
const UPDATE_STUDENT_LAST_NAME = 'UPDATE_STUDENT_LAST_NAME';
const UPDATE_STUDENT_EMAIL = 'UPDATE_STUDENT_NAME';
const UPDATE_STUDENT_GPA = 'UPDATE_STUDENT_NAME';
const UPDATE_STUDENT_CAMPUS = 'UPDATE_STUDENT_CAMPUS';

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

export function updateStudentsAction(students) {
	return {
		type: UPDATE_STUDENTS,
		updatedStudents: students
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

export function updateStudent(id, type, newEntry) {
	return function thunk(dispatch) {
		// Initialize new object to what we want to update
		let studentUpdateObj = {
			type: Number(type),
			entry: newEntry
		};

		axios.put(`/api/students/${id}`, studentUpdateObj)
			.then(res => res.data)
			.then((updatedStudents) => {
				const action = updateStudentsAction(updatedStudents);
				dispatch(action);
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
		case UPDATE_STUDENTS:
			return action.updatedStudents;
		default:
			return state
	}
}