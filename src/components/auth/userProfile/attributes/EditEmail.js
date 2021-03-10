import React, { Component, } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase'
import { editUserProfile } from '../../../store/actions/auth-actions';

class EditEmail extends Component {

	state = {
		email: firebase.auth.email,
		}
			
	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.editUserProfile(this.state)
	}

	render() {
		const { auth, authError } = this.props;
		if (!auth.uid) return <Redirect to='/signin' />

		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Edit Email</h5>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id='email' onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn blue lighten-1">Update</button>
					</div>
					<div className="red-text center">
						{ authError ? <p>{ authError }</p> : null }
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		editUserProfile: (updatedUser) => dispatch(editUserProfile(updatedUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEmail)
