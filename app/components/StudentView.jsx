// components/StudentView.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function StudentView(props) {
	const studentId = Number(props.match.params.studentId);
	const student = props.students.find((student) => {
		return student.id === studentId;
	});

	return ( 
		<div>
			<ul>
				<li>{student && student.firstName} {student && student.lastName}</li>
				<li>{student && student.email}</li>
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		students: state.students
	};
};

const StudentViewContainer = connect(mapStateToProps)(StudentView);

export default StudentViewContainer;
