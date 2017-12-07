// components/StudentView.jsx

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
import Dialog from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import UpdateFieldDialog from './UpdateFieldDialog';

import { getCampusById, updateIds } from '../utils';

const style = {
  textAlign: 'center'
};

function StudentView(props) {
	const studentId = Number(props.match.params.studentId);
	const student = props.students.find((student) => {
		return student.id === studentId;
	});

	const studentCampus = student ? 
		getCampusById(props.campuses, student.campusId) : null;

	return ( 
		<div>
			<h2>Student Information for {student && student.name}</h2>
			<Table selectable={false}>
				<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
		      <TableRow>
		      	<TableHeaderColumn>Student ID</TableHeaderColumn>
		        <TableHeaderColumn>First Name</TableHeaderColumn>
		        <TableHeaderColumn>Last Name</TableHeaderColumn>
		        <TableHeaderColumn>Email</TableHeaderColumn>
		        <TableHeaderColumn>GPA</TableHeaderColumn>
		        <TableHeaderColumn>Campus</TableHeaderColumn>
		      </TableRow>
		    </TableHeader>
		    <TableBody displayRowCheckbox={false}>
		    	<TableRow>
		    		<TableRowColumn>{student && student.id}</TableRowColumn>
			    	<TableRowColumn>{student && student.firstName}</TableRowColumn>
			    	<TableRowColumn>{student && student.lastName}</TableRowColumn>
			    	<TableRowColumn>{student && student.email}</TableRowColumn>
			    	<TableRowColumn>{student && student.gpa}</TableRowColumn>
			    	<TableRowColumn>{student &&studentCampus.name}</TableRowColumn>
		    	</TableRow>
		    	<TableRow>
		    		<TableRowColumn>
		    			<UpdateFieldDialog selection={updateIds.ID}/>
		    		</TableRowColumn>
			    	<TableRowColumn>
			    		<UpdateFieldDialog selection={updateIds.FIRST_NAME}/>
			    	</TableRowColumn>
			    	<TableRowColumn>
			    		<UpdateFieldDialog selection={updateIds.LAST_NAME}/>
			    	</TableRowColumn>
			    	<TableRowColumn>
			    		<UpdateFieldDialog selection={updateIds.EMAIL}/>
			    	</TableRowColumn>
			    	<TableRowColumn>
			    		<UpdateFieldDialog selection={updateIds.GPA}/>
			    	</TableRowColumn>
			    	<TableRowColumn>
			    		<UpdateFieldDialog selection={updateIds.CAMPUS}/>
			    	</TableRowColumn>
		    	</TableRow>
		    </TableBody>
			</Table>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		students: state.students,
		campuses: state.campuses
	};
};

const StudentViewContainer = connect(mapStateToProps)(StudentView);

export default StudentViewContainer;
