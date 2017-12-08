// reducers/students.js

import axios from 'axios';

// Action types
const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_NEW_STUDENT = 'CREATE_NEW_STUDENT';
const UPDATE_STUDENTS = 'UPDATE_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT';

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

export function deleteStudent(studentId, history) {
	return function thunk(dispatch) {
		// Initialize new object to what we want to update
		let studentUpdateObj = {
			studentId: studentId
		};

		axios.delete(`/api/students/${studentId}`, studentUpdateObj)
			.then(res => res.data)
			.then((updatedStudents) => {
				const action = updateStudentsAction(updatedStudents);
				dispatch(action);
				
				if (history)
					history.push('/students');
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