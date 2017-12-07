// components/AddNewStudent.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { blue500 } from 'material-ui/styles/colors';

import { updateStudentNameInputAction } from '../reducers/newStudentEntry';
import { updateStudentCampusSelectionAction } from '../reducers/newStudentCampusSelection';
import { createStudent } from '../reducers/students';

const styles = {
	textFieldColor: {
		color: blue500
	}
};

export default class AddNewStudent extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();

		// Bind change listeners
		this.handleChange = this.handleChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange(event) {
  	// Update newStudentEntry to user's current input
		store.dispatch(updateStudentNameInputAction(event.target.value));
  }

  handleSelectChange(event, index, item) {
  	// Update newCampusSelection to user's selection
		store.dispatch(updateStudentCampusSelectionAction(item));
  }

  handleSubmit(event) {
  	event.preventDefault();

		// Get selected campus from select component
		const campusSelection = Number(this.state.newStudentCampusSelection);

		// Obtain name that user entered
		const studentName = event.target.studentNameField.value.split(' ');

		// Create student object and store it onto our students table
		store.dispatch(createStudent({
			firstName: studentName[0],
			lastName: studentName[1],
			email: event.target.studentEmailField.value,
			gpa: 3.0,
			campusId: campusSelection
		}));

		// Reinitialize student name input field
		store.dispatch(updateStudentNameInputAction(''));
  }

	render() {

		const campuses = this.state.campuses;

		return (
			<div>
				<h2>New Student Form</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<TextField
							name="studentNameField"
	      			floatingLabelText="Student Name"
	      			errorText="Please enter student's full name"
	      			floatingLabelStyle={styles.textFieldColor}
	      			errorStyle={styles.textFieldColor}
	      			onChange={this.handleChange}
						/>
						<br/>

						<TextField
							name="studentEmailField"
	      			floatingLabelText="Student Email"
	      			errorText="Please enter student's valid email"
	      			floatingLabelStyle={styles.textFieldColor}
	      			errorStyle={styles.textFieldColor}
						/>
						<br/>

						<SelectField
							name="campusSelection"
		          floatingLabelText="Campus Selection"
		          onChange={this.handleSelectChange}
		        >
		        {
		        	campuses && campuses.map((campus) => {
		        		return (
		        			<MenuItem
		        				key={campus.id}
		        				value={campus.id}
		        				primaryText={campus.name}
		        			/>
		        		);
		        	})
		        }
			      </SelectField>
						<br/><br/>

					</div>

					<div className="form-group">
		        <button type="submit" className="btn btn-default">Add Student</button>
		      </div>
				</form>
			</div>
		)
	}
}
