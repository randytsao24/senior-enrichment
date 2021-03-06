// components/MyNavBar.jsx

'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
	appBar: {
		backgroundColor: 'black'
	},
	button: {
		margin: 12
	}
};

export default function MyNavBar (props) {
	return (
		<AppBar 
			title='Margaret Hamilton Interplanetary Academy Management System'
			style={styles.appBar}
			iconElementLeft={
				<NavLink to='/campuses'>
					<img width={45} height={45} 
					src='https://pbs.twimg.com/profile_images/694191024416112642/VtJUhbKk.png'/>
				</NavLink>
			}
			iconElementRight={
				<div>
					<NavLink to='/campuses'>
						<RaisedButton id='campusesButton' label="Campuses" style={styles.button}>
						</RaisedButton>
					</NavLink>
					<NavLink to='/students'>
						<RaisedButton id='studentsButton' label="Students" style={styles.button}>
						</RaisedButton>
					</NavLink>
				</div>
			}
		/>
	)
}