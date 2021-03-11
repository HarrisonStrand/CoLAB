import React, { Component, } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase'
import { editUserProfile } from '../../../store/actions/auth-actions';

class EditUserProfile extends Component {

	state = {
		email: firebase.auth.email,
		password: firebase.auth.password,
		firstName: firebase.auth.firstName,
		lastName: firebase.auth.lastName,
		initials: firebase.auth.initials,
		Bio: firebase.auth.Bio,
		Gear: [
			{id: 1, value: "MPC", isChecked: false},
			{id: 2, value: "MPK61", isChecked: false},
		]
		}


	handleGear = (event => {
		let GearSelect = this.state.Gear
		GearSelect.forEach(Gear => {
      if (Gear.value === event.target.value)
          Gear.isChecked =  event.target.checked
					this.setState({GearSelect: GearSelect})
    })
	})
			
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
		// const firebase = getFirebase()
		const { auth, authError, profile} = this.props;
		if (!auth.uid) return <Redirect to='/signin' />
		console.log(auth);

		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Edit Profile</h5>
					{/* <div className="input-field"> */}
						<label htmlFor="firstName">First Name</label>
						<br></br>
						<input type="text" id='firstName' defaultValue={profile.firstName} onChange={this.handleChange} />
					{/* </div> */}
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<br></br>
						<input type="text" id='lastName'defaultValue={profile.lastName} onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="Bio">Bio</label>
						<br></br>
						<input type="text" id='Bio' defaultValue={profile.Bio} onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="email">Email</label>
						<br></br>
						<input type="email" id='email'defaultValue={auth.Gear[0]} onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Password</label>
						<br></br>
						<input type="password" id='password'defaultValue={auth.password} onChange={this.handleChange} />
					</div>
						<label htmlFor="Gear">Gear</label>
						<br></br>
					<div className="input-field">
						<p>
							<label>
								<input type="checkbox" id='1' value='MPC' onChange={this.handleGear}/>
								<span>MPC</span>
							</label>
							<label>
								<input type="checkbox" id='2' value='MPK61' onChange={this.handleGear}/>
								<span>MPK61</span>
							</label>
						</p>
					</div>
					<div className="input-field">
						<Link to='/userprofile'>
							<button className="btn blue lighten-1">Submit</button>
						</Link>
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
		profile: state.firebase.profile,
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
