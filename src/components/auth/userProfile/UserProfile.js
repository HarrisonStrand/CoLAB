import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const UserProfile = (props, {users}) => {

	const { profile, auth } = props;
	const Gear = profile.Gear;
	const Genres = profile.Genres;

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
							{ profile.Bio} 
						</div>
					<br></br>
					<h4>Workflow:</h4>
						<div className="attributeDisplay">
							{ profile.Workflow} 
						</div>
					<br></br>
					<h4>Default DAW:</h4>
						<div className="attributeDisplay">
							{ profile.DefaultDAW} 
						</div>
					<br></br>
						<h4>Gear:</h4>
					<div className="attributeDisplay">
						{Gear.map(item => (
							<div key={item.id}>{item}</div>
							))}
					</div>
					<br></br>
						<h4>Genres:</h4>
					<div className='attributeDisplay'>
						{Genres.map(item => (
							<div key={item.id}>{item}</div>
						))}
					</div>
				</div>
			</div>
		</div>
		)
	}
}
		


const mapStateToProps = (state, ownProps) => {
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
