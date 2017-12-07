// reducers/index.js

import { combineReducers } from 'redux';

import campuses from './campuses';
import students from './students';
import newCampusEntry from './newCampusEntry';
import newStudentCampusSelection from './newStudentCampusSelection';
import newStudentEntry from './newStudentEntry';

// Combining reducers here!
const rootReducer = combineReducers({
	campuses,
	students,
	newCampusEntry,
	newStudentCampusSelection,
	newStudentEntry
});

export default rootReducer;
