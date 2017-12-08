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
	CAMPUS: 5
};

// Dummy componentsfor rendering specified field updating in the UpdateFieldDialog component

const styles = {
	textFieldColor: {
		color: black500
	},
	button: {
		marginBottom: 16
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
