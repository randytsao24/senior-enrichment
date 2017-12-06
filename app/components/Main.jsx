// components/Main.jsx

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Campuses from './Campuses';
import CampusView from './CampusView';
import MyNavBar from './MyNavBar';
import { getCampusList } from '../reducers/campuses';
import store from '../store';

export default class Main extends Component {

	componentDidMount() {
		console.log("Main component mounted!");
		const campusesThunk = getCampusList();

		store.dispatch(campusesThunk);
	}
	
	render() {
		return (
			<div>
				<MyNavBar />
				<main>
					<Switch>
						<Route exact path='/' component={Campuses} />
						<Route path='/campuses/:campusId' component={CampusView} />
						<Route path='/students' component={Campuses} />
						<Redirect to='/' />
			    </Switch>
		    </main>
		  </div>
		)
	}
}