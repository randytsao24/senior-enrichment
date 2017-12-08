// components/UpdateFieldDialog.jsx

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
	DialogUpdateCampus
} from '../utils';
import { updateStudent } from '../reducers/students';

const styles = {
	textFieldColor: {
		color: black500
	}
};

const DialogFieldUpdaters = [
	DialogUpdateFirstName
];

export default class UpdateFieldDialog extends Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false,
			selectionId: Number(this.props.selection),
			updateEntry: ''
		};

		// Bind open/close handlers
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
	}

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
    store.dispatch(updateStudent(
    	Number(this.props.studentId),
    	this.state.selectionId,
    	this.state.updateEntry
    ));
  }

  onUpdate(event) {
  	console.log("value:", event.target.value);
  	this.setState({updateEntry: event.target.value});
  }

	// Display a dialog with options to update selected field
	render() {

		const actions = [
      <RaisedButton
        label="Update"
        primary={true}
        onClick={this.handleClose}
      />
    ];

    const fieldSelections = [
    	'id',
    	'first name',
    	'last name',
    	'email',
    	'GPA',
    	'campus'
    ];

		return (
			<div>
				<RaisedButton label="Update" onClick={this.handleOpen} />
        <Dialog
          title={`Updating student's ${fieldSelections[this.props.selection]}...`}
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
        </Dialog>
			</div>
		);
	}
}
