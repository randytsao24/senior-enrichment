// components/AddNewCampus.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { black500, blue500 } from 'material-ui/styles/colors';

import { updateCampusNameInputAction } from '../reducers/newCampusEntry';
import { createNewCampus } from '../reducers/campuses';

const styles = {
	textFieldColor: {
		color: black500
	}
};

function checkCampusName(campuses, name) {
	return campuses.find((campus) => {
		return campus.name === name;
	});
}

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
  	// Check whether or not user has entered a campus name that already
  	// exists within the list of campuses
  	if (checkCampusName(this.state.campuses, event.target.value)) {
  		console.log("Entered name matches an existing campus name");
  		// TODO: Display an error message if a match occurs
  	}

  	// Update our store's entry for newCampusEntry with user's input
  	store.dispatch(updateCampusNameInputAction(event.target.value));
  }

  handleSubmit(event) {
  	event.preventDefault();

  	// Obtain data from the fields
  	const campusName = this.state.newCampusEntry;
  	const campusImage = event.target.campusImageField.value;
  	const campusDescription = event.target.campusDescription.value;

  	// Create new campus with obtained data
  	store.dispatch(createNewCampus({
  		name: campusName,
  		imageUrl: campusImage,
  		description: campusDescription
  	}, this.props.history));

  	// Reinitialize campus name input to be empty
  	store.dispatch(updateCampusNameInputAction(''));
  }

  // Display a form with fields for entering a campus name, image URL,
  // and description
	render() {

		return (
			<div>
				<h2>Campus Creation Form</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<TextField
							name="campusNameField"
	      			floatingLabelText="New Campus Name"
	      			errorText="Please enter a new campus name"
	      			value={this.state.newCampusEntry}
	      			floatingLabelStyle={styles.textFieldColor}
	      			errorStyle={styles.textFieldColor}
	      			onChange={this.handleChange}
						/>
						<br/>

						<TextField
							name="campusImageField"
	      			floatingLabelText="Campus Image"
	      			errorText="Please enter a valid URL for a picture of the campus"
	      			floatingLabelStyle={styles.textFieldColor}
	      			errorStyle={styles.textFieldColor}
						/><br/>

						<TextField
							name="campusDescription"
				      errorText="Please enter a description"
				      floatingLabelText="Campus Description"
				      multiLine={true}
				      rows={2}
				      errorStyle={styles.textFieldColor}
				      floatingLabelStyle={styles.textFieldColor}
				    /><br/><br/>

					</div>

					<div className="form-group">
		        <button type="submit" className="btn btn-default">Add Campus</button>
		      </div>
				</form>
			</div>
		)
	}
}
