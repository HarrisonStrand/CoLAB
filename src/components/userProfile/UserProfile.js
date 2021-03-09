import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const UserProfile = (props) => {
	const { auth, profile } = props;
	if (!auth.uid) return <Redirect to='/signin' />
		return (
			<div className="userprofile container">
				<div className="row">
					<div className="col s12 m6" id='profilevalues'>
							<h4>Name: {profile.firstName} {profile.lastName}</h4>
							<p>Bio: {profile.Bio}</p>
							<p>DAW: {profile.DefaultDAW}</p>
							<p>Gear: {profile.Gear}</p>
							<p>Bio: {profile.Genres}</p>
							
					</div>
				</div>
			</div>
		) 
	}


const mapStateToProps = (state) => {
	console.log(state)
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(UserProfile)