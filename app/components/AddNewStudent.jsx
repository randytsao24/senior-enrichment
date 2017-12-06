// components/AddNewStudent.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { updateStudentNameInputAction } from '../reducers/newStudentEntry';

function AddNewStudent(props) {
	const campuses = props.campuses;
	const students = props.students;

	return (
		<div>
			<h2>ADD NEW STUDENT!</h2>
			<form>
				<div className="form-group">
					<input
          className="form-control"
          value={props.newStudentEntry}
          type="text"
          name="studentName"
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
		}
	}
}

const AddStudentContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewStudent);

export default AddStudentContainer;
