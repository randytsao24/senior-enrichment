// utils.js

import React from "react";
import { black500, blue500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export function getCampusById(campusList, id) {
	return campusList.find((campus) => {
		return campus.id === id;
	});
}

export const updateIds = {
	ID: 0,
	FIRST_NAME: 1,
	LAST_NAME: 2,
	EMAIL: 3,
	GPA: 4,
	CAMPUS: 5,
	CAMPUS_NAME: 6,
	CAMPUS_DESCRIPTION: 7,
	CAMPUS_IMAGE: 8
};

// Dummy componentsfor rendering specified field updating in the UpdateFieldDialog component

export const styles = {
	root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1200,
    height: 600,
    overflowY: 'auto',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-between'
  },
	textFieldColor: {
		color: black500
	},
	button: {
		margin: 16
	},
	buttonDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  deleteButton: {
  	backgroundColor: '#FF9999'
  },
  addButton: {
  	backgroundColor: '#33FF99'
  }
};

export function DialogUpdateFirstName(props) {
	return (
		<div>
			<TextField
				name="firstNameField"
  			floatingLabelText="Updated First Name"
  			errorText="Please enter a name"
  			floatingLabelStyle={styles.textFieldColor}
  			errorStyle={styles.textFieldColor}
  			onChange={props.update}
			/>
			<br/>
		</div>
	);
}

export function DialogUpdateLastName(props) {
	return (
		<div>
			<TextField
				name="lastNameField"
  			floatingLabelText="Updated Last Name"
  			errorText="Please enter a surname"
  			floatingLabelStyle={styles.textFieldColor}
  			errorStyle={styles.textFieldColor}
  			onChange={props.update}
			/>
			<br/>
		</div>
	);
}

export function DialogUpdateEmail(props) {
	return (
		<div>
			<TextField
				name="emailField"
  			floatingLabelText="Updated Student Email"
  			errorText="Please enter a new email address"
  			floatingLabelStyle={styles.textFieldColor}
  			errorStyle={styles.textFieldColor}
  			onChange={props.update}
			/>
			<br/>
		</div>
	);
}

export function DialogUpdateGpa(props) {
	return (
		<div>
			<TextField
				name="gpaField"
  			floatingLabelText="Updated GPA"
  			errorText="Please enter a GPA"
  			floatingLabelStyle={styles.textFieldColor}
  			errorStyle={styles.textFieldColor}
  			onChange={props.update}
			/>
			<br/>
		</div>
	);
}

export function DialogUpdateCampus(props) {
	return (
		<div>
			<RadioButtonGroup 
				name="campusSelectionGroup" 
				defaultSelected={props.selectedCampus}
				onChange={props.update}
			>
			{
				props.campuses.map(campus => {
					return (
						<RadioButton
							key={campus.id}
							value={campus.id}
							label={campus.name}
							style={styles.button}
						/>
					);
				})
			}
			</RadioButtonGroup>
			<br/>
		</div>
	);
}

export function DialogUpdateCampusName(props) {
	return (
		<div>
			<TextField
				name="campusNameField"
  			floatingLabelText="Updated Campus Name"
  			errorText="Please enter a new campus name"
  			floatingLabelStyle={styles.textFieldColor}
  			errorStyle={styles.textFieldColor}
  			onChange={props.update}
			/>
			<br/>
		</div>
	);
}

export function DialogUpdateCampusDescription(props) {
	return (
		<div>
			<TextField
				name="campusDescriptionField"
  			floatingLabelText="Updated Campus Description"
  			errorText="Please enter a new campus description"
  			floatingLabelStyle={styles.textFieldColor}
  			errorStyle={styles.textFieldColor}
  			onChange={props.update}
			/>
			<br/>
		</div>
	);
}

export function DialogUpdateCampusImage(props) {
	return (
		<div>
			<TextField
				name="campusImageField"
  			floatingLabelText="Updated Campus Image"
  			errorText="Please enter a new campus image URL"
  			floatingLabelStyle={styles.textFieldColor}
  			errorStyle={styles.textFieldColor}
  			onChange={props.update}
			/>
			<br/>
		</div>
	);
}
