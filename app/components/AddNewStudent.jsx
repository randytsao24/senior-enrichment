// components/AddNewStudent.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function AddNewStudent(props) {
	const campuses = props.campuses;
	const students = props.students;

	return (
		<div>
			<h2>ADD NEW STUDENT!</h2>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		campuses: state.campuses,
		students: state.students
	};
};

const AddStudentContainer = connect(mapStateToProps)(AddNewStudent);

export default AddStudentContainer;
