// components/UpdateFieldDialog.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { black500, blue500 } from 'material-ui/styles/colors';

class UpdateFieldDialog extends Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false
		};

		// Bind open/close handlers
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
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

		return (
			<div>
				<RaisedButton label="Update" onClick={this.handleOpen} />
        <Dialog
          title="Update Student Information"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        	Testing my dialog!
        </Dialog>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		students: state.students,
		campuses: state.campuses
	};
};

const UpdateFieldDialogContainer = connect(mapStateToProps)(UpdateFieldDialog);

export default UpdateFieldDialogContainer;
