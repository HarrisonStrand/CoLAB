import React, { Component, } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase'
import { editUserProfile } from '../../../store/actions/auth-actions';

class EditUserProfile extends Component {


	constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
  }
	state = {
		email: firebase.auth.email,
		password: firebase.auth.password,
		firstName: firebase.auth.firstName,
		lastName: firebase.auth.lastName,
		initials: firebase.auth.initials,
		// Gear: firebase.auth.Gear,
		GearNames: {
			MPC: false,
		}
	}

	// chkclick = (event) => {
	// 	var {name,checked} = event.target;

	// 	this.setState((event) => {
	// 		selectedGear = event.GearNames
	// 		return selectedGear[name] = checked
	// 	})
	// }

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.editUserProfile(this.state)
		console.log(this.state)
		// this.props.(this.state)

	}

	render() {
		const { auth, authError } = this.props;
		if (!auth.uid) return <Redirect to='/signin' />

		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Edit Profile</h5>
					<div className="input-field">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id='firstName' onChange={this.handleChange} />
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
						<label htmlFor="Gear">Gear</label>
					<div className="input-field">
						<p>
							<label>
								<input type="checkbox" checked="" onChange={this.handleChange}/>
								<span>MPC</span>
								<input type="checkbox" checked="" onChange={this.handleChange}/>
								<span>MPC</span>
								<input type="checkbox" checked="" onChange={this.handleChange}/>
								<span>MPC</span>
							</label>
						</p>
					</div>
					<div className="input-field">
						<button className="btn blue lighten-1">Submit</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfile)
