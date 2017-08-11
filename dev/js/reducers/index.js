/*where all the reducers are combined and added to */
import { combineReducers } from 'redux';
/*being imported and stored in a var called UserReducer*/
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
    users: UserReducer, //users is what you are calling it; UserReducer is the users from the other file
    activeuser: ActiveUserReducer
}); 

export default allReducers;
