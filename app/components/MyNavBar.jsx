// components/MyNavBar.jsx

'use strict';

import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
	margin: 12
};

export default function MyNavBar (props) {
	return (
		<MuiThemeProvider>
			<AppBar 
				title='Fullstack Galactic Academy Manager'
				iconElementRight={
					<div>
						<RaisedButton label="Campuses" style={styles} disabled={true}>
						</RaisedButton>
						<RaisedButton label="Students" style={styles}>
						</RaisedButton>
					</div>
				}
			/>
		</MuiThemeProvider>
	)
}