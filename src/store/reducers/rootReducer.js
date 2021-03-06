import authReducer from './auth-reducer';
import postReducer from './post-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
});

export default rootReducer;