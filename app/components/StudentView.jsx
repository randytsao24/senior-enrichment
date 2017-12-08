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
	const student = props.students.length > 0 ?
	 props.students.find((student) => {
		return student.id === studentId;
	}) 
	 :
	null;

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
			    	<TableRowColumn>
			    		<NavLink to={`/campuses/${studentCampus && studentCampus.id}`}>
			    			{studentCampus && studentCampus.name}
			    		</NavLink>
			    	</TableRowColumn>
		    	</TableRow>

		    	<TableRow>
		    		<TableRowColumn>
		    			{/* Empty column for ID! */}
		    		</TableRowColumn>
			    	<TableRowColumn>
			    		<UpdateFieldDialog 
			    			field={student && student.firstName} 
			    			studentId={student && student.id}
			    			selection={updateIds.FIRST_NAME} />
			    	</TableRowColumn>
			    	<TableRowColumn>
			    		<UpdateFieldDialog
			    			studentId={student && student.id} 
			    			lastName={student && student.lastName} 
			    			students={student && props.students}
			    			selection={updateIds.LAST_NAME} />
			    	</TableRowColumn>
			    	<TableRowColumn>
			    		<UpdateFieldDialog 
			    			studentId={student && student.id}
			    			selection={updateIds.EMAIL}/>
			    	</TableRowColumn>
			    	<TableRowColumn>
			    		<UpdateFieldDialog 
			    			studentId={student && student.id}
			    			selection={updateIds.GPA}/>
			    	</TableRowColumn>
			    	<TableRowColumn>
			    		<UpdateFieldDialog 
			    			studentId={student && student.id}
			    			campusId={student && student.campusId}
			    			campuses={props.campuses}
			    			selection={updateIds.CAMPUS}/>
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
