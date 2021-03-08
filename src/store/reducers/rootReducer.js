import authReducer from './auth-reducer';
import postReducer from './post-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
	firestore: firestoreReducer
});

export default rootReducer;