export const editUserProfile = (user) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to database
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const authorId = getState().firebase.auth.uid;
		firestore.collection('users').update({
			...user,
			authorFirstName: profile.firstName,
			authorLastName: profile.lastName,
			authorId: authorId,
			Gear: profile.Gear,
			Bio: profile.Bio,
			Genres: profile.Genres,
		}).then(() => {
			dispatch({ type: 'UPDATE_PROFILE', user});
		}).catch((error) => {
			dispatch({ type: 'UPDATE_PROFILE_ERROR', error });
		})
	}
};