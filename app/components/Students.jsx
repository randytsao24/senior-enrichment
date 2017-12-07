// components/Students.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Helper function for our Students component
function getCampusById(campusList, id) {
	return campusList.find((campus) => {
		return campus.id === id;
	});
}

function Students(props) {
	const campuses = props.campuses;
	const students = props.students;

	return ( 
		<div>
			<h2>Fullstack Student List</h2>

			<NavLink to='/add-new-student'>
				<RaisedButton label='Add Student'>
				</RaisedButton>
			</NavLink>

			<Table>
				<TableHeader>
		      <TableRow>
		        <TableHeaderColumn>#</TableHeaderColumn>
		        <TableHeaderColumn>Name</TableHeaderColumn>
		        <TableHeaderColumn>Campus</TableHeaderColumn>
		      </TableRow>
		    </TableHeader>
		    <TableBody>
		    {
		    	students && students.map((student, index) => {
		    		let studentCampus = getCampusById(campuses, student.campusId);

		    		return (
		    			<TableRow key={student.id}>
				        <TableRowColumn>{index + 1}</TableRowColumn>
				        <TableRowColumn>
				        	<NavLink to={`/students/${student.id}`}>
				        		{student.name}
				        	</NavLink>
				        </TableRowColumn>
				        <TableRowColumn>
				        	<NavLink to={`/campuses/${studentCampus.id}`}>
				        		{studentCampus.name}
				        	</NavLink>
				        </TableRowColumn>
				      </TableRow>
		    		);
		    	})
		    }
		    </TableBody>
			</Table>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		campuses: state.campuses,
		students: state.students
	};
};

const StudentListContainer = connect(mapStateToProps)(Students);

export default StudentListContainer;