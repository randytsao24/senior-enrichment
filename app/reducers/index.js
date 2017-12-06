// reducers/index.js

import { combineReducers } from 'redux';

import campuses from './campuses';
import students from './students';
import newStudentEntry from './newStudentEntry';

// Combining reducers here!
const rootReducer = combineReducers({
	campuses,
	students,
	newStudentEntry
});

export default rootReducer;
