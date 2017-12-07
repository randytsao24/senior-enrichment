// components/AddNewCampus.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { updateStudentNameInputAction } from '../reducers/newStudentEntry';
import { updateStudentCampusSelectionAction } from '../reducers/newStudentCampusSelection';
import { createStudent } from '../reducers/students';


export default class AddNewCampus extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();

		// Bind change listeners
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange(event) {
  	console.log("Campus input field changed");
  }

  handleSubmit(event) {
  	event.preventDefault();

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
							hintText="Enter student's name"
	      			floatingLabelText="Student Name"
	      			onChange={this.handleChange}
						/>
						<br/>

						<TextField
							name="studentEmailField"
							hintText="Enter student's email"
	      			floatingLabelText="Student Email"
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
