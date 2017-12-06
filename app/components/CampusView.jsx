// components/CampusView.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

function CampusView(props) {
	console.log("CampusView props:", props);

	const campusId = Number(props.match.params.campusId);
	const campusStudents = props.students.filter((student) => {
		return student.campusId === campusId;
	});
	const selectedCampus = props.campuses.find((campus) => {
		return campus.id === campusId;
	});

	console.log('campusId:', campusId);
	console.log('selectedCampus:', selectedCampus);
	console.log('campusStudents:', campusStudents);

	return ( 
		<div>
			<h2>{selectedCampus && selectedCampus.name}</h2>
			<div>
				Description: {selectedCampus && selectedCampus.description}
			</div>
			<h3>Students</h3>
			<ul>
			{
				campusStudents && campusStudents.map((student, index) => {
					return (
						<div key={student.id}>
							{index + 1} - {' '}    
							<NavLink to={`/students/${student.id}`}>
								{student.firstName} {student.lastName}
							</NavLink>
							<br/><br/>
						</div>
					)
				})
			}
			</ul>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		campuses: state.campuses,
		students: state.students
	};
};

const CampusViewContainer = connect(mapStateToProps)(CampusView);

export default CampusViewContainer;
