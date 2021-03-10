const initState ={
	authError: null,
	error: null,
  loading: false,
	profileEdit: {
    error: null,
    loading: false,
  },
  deleteUser: {
    loading: false,
    error: null,
  },
}

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOGIN_ERROR':
			console.log('login error')
			return {
				...state,
				authError: 'Login Failed'
			}
		case 'LOGIN_SUCCESS':
			console.log('login success');
			return {
				...state,
				authError: null
			}
		case 'SIGNOUT_SUCCESS':
			console.log('signout success');
			return state;
		case 'REGISTER_SUCCESS':
			console.log('register success');
			return {
				...state,
				authError: null
			}
		case 'REGISTER_ERROR':
			console.log('register error');
			return {
				...state,
				authError: action.error.message
			}
			case 'PROFILE_EDIT_START':
				return {
					...state,
					profileEdit: { ...state.profileEdit, loading: true },
				};
	
			case 'PROFILE_EDIT_SUCCESS':
				return {
					...state,
					profileEdit: { ...state.profileEdit, loading: false, error: false },
				};
	
			case 'PROFILE_EDIT_FAIL':
				return {
					...state,
					profileEdit: { ...state.profileEdit, loading: false, error: true },
				};
		default:
			return state;
	}
}

export default authReducer;