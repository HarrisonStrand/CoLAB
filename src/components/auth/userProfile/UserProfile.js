import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect, Link } from 'react-router-dom';

const UserProfile = (props) => {

	const { auth, profile } = props;

	if (!auth.uid) return <Redirect to='/signin' />
	if (profile) {
		return (
		<div className="container section profile-detail">
			<div className="card">
				<div className="card-content">
					<h4>Name:</h4>
						<div className='attributeDisplay'>
							{ profile.firstName } { profile.lastName}
						</div>
					<br></br>
					<h4>Bio:</h4>
						<div className="attributeDisplay">
							{ profile.bio} 
						</div>
					<br></br>
					<h4>Workflow Description:</h4>
						<div className="attributeDisplay">
							{ profile.workflow} 
						</div>
					<br></br>
					<h4>Default DAW:</h4>
						<div className="attributeDisplay">
							{ profile.daw} 
						</div>
					<br></br>
						<h4>Available Gear:</h4>
					<div className="attributeDisplay">

					
						{profile.gear.map(item => (
							<p key={item.value}>{item.value}</p>
							))}
					</div>
					<br></br>
						<h4>Genre Interests:</h4>
					<div className='attributeDisplay'>
						{profile.genres.map(item => (
							<div key={item.value}>{item.value}</div>
						))}
					</div>
				</div>
			</div>
			<Link to={'/edituserprofile/'} key = {auth.uid}>Edit Profile</Link>
		</div>
		)
	}
}
		


const mapStateToProps = (state) => {
	return {
		profile: state.firebase.profile,
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'users' }
	])
)(UserProfile)
