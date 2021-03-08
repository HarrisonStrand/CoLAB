export const createPost = (post) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to database
		const firestore = getFirestore();
		firestore.collection('posts').add({
			...post,
			authorFirstName: 'Harrison',
			authorLastName: 'Strand',
			authorId: 12345,
			createdAt: new Date()
		}).then(() => {
			dispatch({ type: 'CREATE_POST', post: post});
		}).catch((error) => {
			dispatch({ type: 'CREAT_POST_ERROR', error });
		})
	}
};