// components/CampusView.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

function CampusView(props) {

	const campusId = Number(props.match.params.campusId);
	const campusStudents = props.students.filter((student) => {
		return student.campusId === campusId;
	});
	const selectedCampus = props.campuses.find((campus) => {
		return campus.id === campusId;
	});

	return ( 
		<div>
			<h2>{selectedCampus && selectedCampus.name}</h2>
			<div>
				Description: {selectedCampus && selectedCampus.description}
			</div>
			<h3>Students</h3>
			<Table selectable={false}>
				<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
		      <TableRow>
		        <TableHeaderColumn>#</TableHeaderColumn>
		        <TableHeaderColumn>Name</TableHeaderColumn>
		        <TableHeaderColumn>Student ID</TableHeaderColumn>
		      </TableRow>
		    </TableHeader>
		    <TableBody displayRowCheckbox={false}>
		    {
		    	campusStudents && campusStudents.map((student, index) => {
		    		return (
		    			<TableRow key={student.id}>
		    				<TableRowColumn>{index + 1}</TableRowColumn>
		    				<TableRowColumn>
		    					<NavLink to={`/students/${student.id}`}>
		    						{student.name}
		    					</NavLink>
		    				</TableRowColumn>
		    				<TableRowColumn>{student.id}</TableRowColumn>
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

const CampusViewContainer = connect(mapStateToProps)(CampusView);

export default CampusViewContainer;
