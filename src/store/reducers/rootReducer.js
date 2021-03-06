import authReducer from './auth-reducer';
import postReducer from './post-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer
});

export default rootReducer;