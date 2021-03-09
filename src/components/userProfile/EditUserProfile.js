import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'react';
import { firestoreConnect } from 'react-redux-firebase';
import { editUserProfile } from '../../store/actions/user-profile-actions';
import { Redirect } from 'react-router-dom';

class EditUserProfile extends Component {

	state = {

	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.editUserProfile(this.state)
		this.props.history.push('/userprofile');
	}

	render() {
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to='/signin' />
		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Update Profile</h5>
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id='firstName'onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id='lastName'onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="Bio">Bio:</label>
						<textarea id="Bio" className="materialize-textarea" onChange={this.handleChange}></textarea>
					</div>
					<div className="input-field">
						<label htmlFor="Workflow">Workflow:</label>
						<textarea id="Workflow" className="materialize-textarea" onChange={this.handleChange}></textarea>
					</div>
					<div className="input-field">
						<button className="btn blue lighten-1">Update</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		editUserProfile: (profile) => dispatch(editUserProfile(profile))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(EditUserProfile)
