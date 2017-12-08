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

// Helper function for our Students component
function getCampusById(campusList, id) {
	return campusList.find((campus) => {
		return campus.id === id;
	});
}

export default class Students extends Component {

	constructor(props) {
		super(props);

		this.state = store.getState();
	}

	componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

	render() {
		const campuses = this.state.campuses;
		const students = this.state.students;

		return ( 
			<div>
				<h2>Student List</h2>

				<NavLink to='/add-new-student'>
					<RaisedButton label='Add Student'>
					</RaisedButton>
				</NavLink>

				<Table selectable={false}>
					<TableHeader displaySelectAll={false} adjustForCheckbox={false}>
			      <TableRow>
			        <TableHeaderColumn>#</TableHeaderColumn>
			        <TableHeaderColumn>Name</TableHeaderColumn>
			        <TableHeaderColumn>Campus</TableHeaderColumn>
			        <TableHeaderColumn>Student ID</TableHeaderColumn>
			        <TableHeaderColumn></TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody displayRowCheckbox={false}>
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
					        <TableRowColumn>
					        	<NavLink to={`/students/${student.id}`}>
					        		{student.id}
					        	</NavLink>
					        </TableRowColumn>
					        <TableRowColumn>
					        	<RaisedButton label='X'></RaisedButton>
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
}
