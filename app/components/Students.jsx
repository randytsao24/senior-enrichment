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

import { deleteStudent } from '../reducers/students';
import { sortByName, styles } from '../utils';

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

		this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
	}

	componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleDeleteButtonClick(event) {
  	console.log('yooo');
  }

	render() {
		const campuses = this.state.campuses;
		let students = this.state.students;

		return ( 
			<div>
				<div style={styles.header}>
					<h2>Student List</h2>

					<NavLink to='/add-new-student'>
						<RaisedButton 
							backgroundColor={styles.addButton.backgroundColor} 
							style={styles.button}
							label='Add Student'>
						</RaisedButton>
					</NavLink>
				</div>

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
					        	<NavLink style={styles.link} to={`/students/${student.id}`}>
					        		{student.name}
					        	</NavLink>
					        </TableRowColumn>
					        <TableRowColumn>
					        	<NavLink style={styles.link} to={`/campuses/${studentCampus.id}`}>
					        		{studentCampus.name}
					        	</NavLink>
					        </TableRowColumn>
					        <TableRowColumn>
					        	<NavLink style={styles.link} to={`/students/${student.id}`}>
					        		{student.id}
					        	</NavLink>
					        </TableRowColumn>
					        <TableRowColumn>
					        	<RaisedButton 
					        		label='Delete' 
					        		backgroundColor={styles.deleteButton.backgroundColor}
					        		onClick={function() {
					        			console.log(student.id);
					        			store.dispatch(deleteStudent(student.id));
					        		}}>
					        	</RaisedButton>
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
