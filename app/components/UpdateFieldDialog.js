// components/UpdateFieldDialog.jsx
// This is a semi-modular component which displays a pop-up dialog
// when the associated button is clicked. It utilizes sub-components
// defined in app/utils.js to determine which field to update.

// NOTE: This is a very messy component, I wanted to see if I could
// update a single field at a time rather than showing a form of
// all the fields

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { black500, blue500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

import { 
	getCampusById, 
	updateIds,
	DialogUpdateFirstName,
	DialogUpdateLastName,
	DialogUpdateEmail,
	DialogUpdateGpa,
	DialogUpdateCampus,
  DialogUpdateCampusName,
  DialogUpdateCampusDescription,
  DialogUpdateCampusImage,
	styles
} from '../utils';
import { updateStudent } from '../reducers/students';
import { updateCampus } from '../reducers/campuses';

export default class UpdateFieldDialog extends Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false,
      sourceId: this.props.studentId || this.props.campusId,
			selectionId: Number(this.props.selection),
			updateEntry: ''
		};

		// Bind open/close handlers
		this.handleOpen = this.handleOpen.bind(this);
    this.handleCancelClose = this.handleCancelClose.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
	}

  handleOpen() {
    this.setState({open: true});
  }

  handleCancelClose() {
    this.setState({open: false});
  }

  handleClose() {
    this.setState({open: false});

    // Check if we're updating a student or a campus
    if (this.props.studentId) {
      store.dispatch(updateStudent(
      	Number(this.props.studentId),
      	this.state.selectionId,
      	this.state.updateEntry
      ));
    } else {
      store.dispatch(updateCampus(
        Number(this.props.campusId),
        this.state.selectionId,
        this.state.updateEntry
      ));
    }
  }

  onUpdate(event) {
  	this.setState({updateEntry: event.target.value});
  }

	// Display a dialog with options to update selected field
	render() {

		const actions = [
      <RaisedButton
        label="Cancel"
        style={styles.button}
        backgroundColor={styles.deleteButton.backgroundColor}
        primary={true}
        onClick={this.handleCancelClose}
      />,
      <RaisedButton
        label="Update"
        style={styles.button}
        backgroundColor={styles.addButton.backgroundColor}
        primary={true}
        onClick={this.handleClose}
      />
    ];

    const fieldSelections = [
    	'id',
    	'student\'s first name',
    	'student\'s last name',
    	'student\'s email',
    	'student\'s GPA',
    	'student\'s campus',
    	'campus name',
    	'campus description',
    	'campus image URL'
    ];

		return (
			<div>
				<RaisedButton 
          label={this.props.buttonLabel || 'Update'} 
          backgroundColor={styles.editButton.backgroundColor}
          onClick={this.handleOpen} />
        <Dialog
          title={`Updating ${fieldSelections[this.props.selection]}...`}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
	        {this.props.selection === 1 ? <DialogUpdateFirstName update={this.onUpdate} /> : null}
	        {this.props.selection === 2 ? <DialogUpdateLastName update={this.onUpdate} /> : null}
	        {this.props.selection === 3 ? <DialogUpdateEmail update={this.onUpdate} /> : null}
	        {this.props.selection === 4 ? <DialogUpdateGpa update={this.onUpdate} /> : null}
	        {this.props.selection === 5 ? <DialogUpdateCampus campuses={this.props.campuses} selectedCampus={this.props.campusId} update={this.onUpdate} /> : null}
          {this.props.selection === 6 ? <DialogUpdateCampusName update={this.onUpdate} /> : null}
          {this.props.selection === 7 ? <DialogUpdateCampusDescription update={this.onUpdate} /> : null}
          {this.props.selection === 8 ? <DialogUpdateCampusImage update={this.onUpdate} /> : null}
        </Dialog>
			</div>
		);
	}
}
