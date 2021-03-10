import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../store/actions/auth-actions';

class Register extends Component {

	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		Gear: [],
		Bio: '',
		Workflow: '',
		DefautDAW: '',
		Genres: []
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.register(this.state)

	}

	render() {
		const { auth, authError } = this.props;
		if (auth.uid) return <Redirect to='/' />
		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Register</h5>
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id='firstName'onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id='lastName'onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<input type="email" id='email'onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<input type="password" id='password'onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<button className="btn blue lighten-1">Register</button>
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
		register: (newUser) => dispatch(register(newUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
