// import React, { Component, } from 'react'
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import firebase from 'firebase'
// import { editUserProfile } from '../../../store/actions/auth-actions';

// class EditUserProfile extends Component {

// 	state = {
// 		email: firebase.auth.email,
// 		password: firebase.auth.password,
// 		firstName: firebase.auth.firstName,
// 		lastName: firebase.auth.lastName,
// 		initials: firebase.auth.initials,
// 		Bio: firebase.auth.Bio,
// 		Gear: [
// 			{id: 1, value: "MPC", isChecked: false},
// 			{id: 2, value: "MPK61", isChecked: false},
// 		]
// 		}

// 	handleGear = (event => {
// 		let GearSelect = this.state.Gear
// 		GearSelect.forEach(Gear => {
//       if (Gear.value === event.target.value)
//           Gear.isChecked =  event.target.checked
// 					this.setState({GearSelect: GearSelect})
//     })
// 	})
			
// 	handleChange = (event) => {
// 		this.setState({
// 			[event.target.id]: event.target.value
// 		})
// 	}

// 	handleSubmit = (event) => {
// 		event.preventDefault();
// 		this.props.editUserProfile(this.state)
// 		console.log(this.state)
// 		// this.props.(this.state)

// 	}

// 	render() {
// 		const { auth, authError } = this.props;
// 		if (!auth.uid) return <Redirect to='/signin' />

// 		return (
// 			<div className='container'>
// 				<form onSubmit={this.handleSubmit} className="white">
// 					<h5 className="grey-text text-darken-3">Edit Profile</h5>
// 					<div className="input-field">
// 						<label htmlFor="firstName">First Name</label>
// 						<input type="text" id='firstName' onChange={this.handleChange} />
// 					</div>
// 					<div className="input-field">
// 						<label htmlFor="lastName">Last Name</label>
// 						<input type="text" id='lastName'onChange={this.handleChange} />
// 					</div>
// 					<div className="input-field">
// 						<label htmlFor="Bio">Bio</label>
// 						<input type="text" id='Bio'onChange={this.handleChange} />
// 					</div>
// 					<div className="input-field">
// 						<label htmlFor="email">Email</label>
// 						<input type="email" id='email'onChange={this.handleChange} />
// 					</div>
// 					<div className="input-field">
// 						<label htmlFor="password">Password</label>
// 						<input type="password" id='password'onChange={this.handleChange} />
// 					</div>
// 						<label htmlFor="Gear">Gear</label>
// 					<div className="input-field">
// 						<p>
// 							<label>
// 								<input type="checkbox" id='1' value='MPC' onChange={this.handleCheckbox}/>
// 								<span>MPC</span>
// 							</label>
// 							<label>
// 								<input type="checkbox" id='2' value='MPK61' onChange={this.handleCheckbox}/>
// 								<span>MPK61</span>
// 							</label>
// 						</p>
// 					</div>
// 					<div className="input-field">
// 						<button className="btn blue lighten-1">Submit</button>
// 					</div>
// 					<div className="red-text center">
// 						{ authError ? <p>{ authError }</p> : null }
// 					</div>
// 				</form>
// 			</div>
// 		)
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		auth: state.firebase.auth,
// 		authError: state.auth.authError
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		editUserProfile: (updatedUser) => dispatch(editUserProfile(updatedUser))
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfile)
