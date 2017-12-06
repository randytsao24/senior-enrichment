/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';

import campuses from './campuses';
import students from './students';

const initialState = {
	campuses: []
};

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

// Combining reducers here!
const rootReducer = combineReducers({
	campuses,
	students
});

export default rootReducer;
