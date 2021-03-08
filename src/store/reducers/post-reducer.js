const initState = {
	posts: [
		{id: '1', title: 'this is a title', message: 'this is a message'},
		{id: '2', title: 'this is a second title', message: 'this is a second message'},
		{id: '3', title: 'this is a third title', message: 'this is a third message'},
	]
}

const postReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_POST':
			console.log('created post', action.post);
			return state;
		case 'CREAT_POST_ERROR':
			console.log('creat post error', action.error);
			return state;
		default:
			return state;
	}
}

export default postReducer;