// components/CampusView.jsx

import React, { Component } from 'react';
import store from '../store';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function CampusView(props) {
	console.log("CampusView props:", props);

	return (
		<div>
			<h2>PLACEHOLDER FOR CAMPUS VIEW</h2>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		currentCampus: state.currentCampus
	};
}

const CampusViewContainer = connect(mapStateToProps)(CampusView);

export default CampusViewContainer;