export const signIn = (credentials) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase.auth().signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		).then(() => {
			dispatch({ type: 'LOGIN_SUCCESS' });
		}).catch((error) => {
			dispatch ({ type: 'LOGIN_ERROR', error});
		});
	}
}

export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase.auth().signOut().then(() => {
			dispatch({ type: 'SIGNOUT_SUCCESS' });
		});
	}
}

export const register = (newUser) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase.auth().createUserWithEmailAndPassword(
			newUser.email,
			newUser.password,
		).then((response) => {
			return firestore.collection('users').doc(response.user.uid)
			.set({
				firstName: newUser.firstName,
				lastName: newUser.lastName,
				initials: newUser.firstName[0] + newUser.lastName[0],
				bio: newUser.bio,
				gear: newUser.gear,
				genres: newUser.genres,
				workflow: newUser.workflow,
				daw: newUser.daw
		// 	})
		// }).then((response) => {
		// 	return firestore.collection('users').add({
			})
		}).then(() => {
			dispatch({ type: 'REGISTER_SUCCESS' })
		}).catch(error => {
			dispatch({ type: 'REGISTER_ERROR', error })
		})
	}
}


export const editUserProfile = data => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const user = firebase.auth().currentUser;
  const { uid: userId, email: userEmail} = getState().firebase.auth;
  dispatch({ type: 'PROFILE_EDIT_START' });
  try {
    //edit the user profile
    if (data.email !== userEmail) {
      await user.updateEmail(data.email);
    }

    await firestore
      .collection('users')
      .doc(userId)
      .set({
        firstName: data.firstName,
        lastName: data.lastName,
				initials: data.firstName[0] + data.lastName[0],
				Gear: data.Gear,
				Bio: data.Bio
      })
			.add({
				Gear: data.Gear,
				Bio: data.Bio
			})

    if (data.password.length >= 6) {
      await user.updatePassword(data.password);
    }
    dispatch({ type: 'PROFILE_EDIT_SUCCESS' })
  } catch (err) {
    dispatch({ type: 'PROFILE_EDIT_FAIL', payload: err.message });
  }
};