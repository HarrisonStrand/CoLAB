const initState ={
	authError: null
}

const userProfileReducer = (state = initState, action) => {
	switch (action.type) {
		case 'UPDATE_PROFILE':
			console.log('updated profile', action.post);
			return state;
		case 'UPDATE_PROFILE_ERROR':
			console.log('updated profile error', action.error);
			return state;
		default:
			return state;
	}
}

export default userProfileReducer;