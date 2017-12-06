// components/AddNewStudent.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { updateStudentNameInputAction } from '../reducers/newStudentEntry';
import { createStudent } from '../reducers/students';

function AddNewStudent(props) {
	const campuses = props.campuses;
	const students = props.students;

	return (
		<div>
			<h2>New Student Form</h2>
			<form onSubmit={props.handleSubmit}>
				<div className="form-group">
					<input
          className="form-control"
          value={props.newStudentEntry}
          type="text"
          name="studentNameInput"
          placeholder="Enter student's name"
          onChange={props.handleChange}
        	/>
				</div>

				<div className="form-group">
	        <button type="submit" className="btn btn-default">Add Student</button>
	      </div>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		newStudentEntry: state.newStudentEntry
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleChange: (event) => {
			console.log("Name:", event.target.value);
			dispatch(updateStudentNameInputAction(event.target.value));
		},
		handleSubmit: (event) => {
			event.preventDefault();
			const studentName = event.target.studentNameInput.value.split(' ');

			dispatch(createStudent({
				firstName: studentName[0],
				lastName: studentName[1],
				email: studentName[0] + studentName[1] + '@fullstack.edu',
				gpa: 3.0,
				campusId: 1
			}));
			dispatch(updateStudentNameInputAction(''));
		}
	}
}

const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewStudent);

export default AddStudentContainer;
