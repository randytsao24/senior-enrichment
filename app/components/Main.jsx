// components/Main.jsx

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AddNewStudent from './AddNewStudent';
import AddNewCampus from './AddNewCampus';
import Campuses from './Campuses';
import CampusView from './CampusView';
import Students from './Students';
import StudentView from './StudentView';
import MyNavBar from './MyNavBar';
import { getCampusList } from '../reducers/campuses';
import { getStudentList } from '../reducers/students';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import store from '../store';

export default class Main extends Component {

	componentDidMount() {
		console.log("Main component mounted!");

		// Obtain list of campuses
		const campusesThunk = getCampusList();
		store.dispatch(campusesThunk);

		// Obtain list of students
		const studentsThunk = getStudentList();
		store.dispatch(studentsThunk);
	}
	
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<MyNavBar />
					<main>
						<Switch>
							<Route path='/campuses/:campusId' component={CampusView} />
							<Route path='/students/:studentId' component={StudentView} />
							<Route exact path='/add-new-student' component={AddNewStudent} />
							<Route exact path='/add-new-campus' component={AddNewCampus} />
							<Route exact path='/campuses' component={Campuses} />
							<Route exact path='/students' component={Students} />
							<Redirect to='/campuses' />
				    </Switch>
			    </main>
			  </div>
		  </MuiThemeProvider>
		)
	}
}
