import authReducer from './auth-reducer';
import postReducer from './post-reducer';
import userProfileReducer from './user-profile-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
	userprofile: userProfileReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
});

export default rootReducer;