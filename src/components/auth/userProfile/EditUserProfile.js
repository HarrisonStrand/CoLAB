import React, { Component, } from 'react'
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase'
import { editUserProfile } from '../../../store/actions/auth-actions';

class EditUserProfile extends Component {

	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		initials: '',
		bio: '',
		workflow: '',
		daw: '',
		gear: [
			{id:'1', value: "MPC", isChecked: false},
			{id:'2', value:'Mandolin', isChecked: false},
			{id:'3', value:'Pedals', isChecked: false},
			{id:'4', value:'Drumset', isChecked: false},
			{id:'5', value:'Bass', isChecked: false},
			{id:'6', value:'Guitar', isChecked: false},
			{id:'7', value:'Synth', isChecked: false},
			{id:'8', value:'Keyboard', isChecked: false},
			{id:'9', value:'Amp', isChecked: false},
			{id:'10', value:'Microphone', isChecked: false},
		],
		genres: [
			{id:'11', value:'Techno', isChecked: false},
			{id:'12', value:'House', isChecked: false},
			{id:'13', value:'Hip-Hop', isChecked: false},
			{id:'14', value:'Indie-Rock', isChecked: false},
			{id:'15', value:'Rock', isChecked: false},
			{id:'16', value:'Funk', isChecked: false},
			{id:'17', value:'Acoustic', isChecked: false},
			{id:'18', value:'Experimental', isChecked: false},
			{id:'19', value:'Folk', isChecked: false},
			{id:'20', value:'Pop', isChecked: false},
		]
		}


	handleGear = (event => {
		let gearSelect = this.state.gear
		gearSelect.forEach(gear => {
      if (gear.value === event.target.value)
          gear.isChecked =  event.target.checked
					this.setState({gearSelect: gearSelect})
    })
	})

	handleGenres = (event => {
		let genresSelect = this.state.genres
		genresSelect.forEach(genres => {
      if (genres.value === event.target.value)
          genres.isChecked =  event.target.checked
					this.setState({genresSelect: genresSelect})
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
		console.log(firebase.profile)
		// this.props.(this.state)

	}

	render() {
		// const firebase = getFirebase()
		const { auth, authError, profile} = this.props;
		if (!auth.uid) return <Redirect to='/signin' />

		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Edit Profile</h5>
					{/* <div className="input-field"> */}
						<label htmlFor="firstName">First Name</label>
						<br></br>
						<input type="text" id='firstName' defaultValue={auth.firstName} onChange={this.handleChange} />
					{/* </div> */}
					<div className="input-field">
						<label htmlFor="lastName">Last Name</label>
						<br></br>
						<input type="text" id='lastName' onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="bio">Bio</label>
						<br></br>
						<input type="text" id='bio' onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="daw">Default Digital Audio Workspace</label>
						<br></br>
						<input type="text" id='daw' onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="workflow">Workflow Description</label>
						<br></br>
						<input type="text" id='workflow' onChange={this.handleChange} />
					</div>
						<label htmlFor="gear">Gear</label>
						<br></br>
					<div className="input-field">
						<p>
							<label>
								<input type="checkbox" id='1' value='MPC' onChange={this.handleGear}/>
								<span>MPC</span>
							</label>
							<label>
								<input type="checkbox" id='2' value='Mandolin' onChange={this.handleGear}/>
								<span>Mandolin</span>
							</label>
							<label>
								<input type="checkbox" id='3' value='Pedals' onChange={this.handleGear}/>
								<span>Pedals</span>
							</label>
							<label>
								<input type="checkbox" id='4' value='Drumset' onChange={this.handleGear}/>
								<span>Drumset</span>
							</label>
							<label>
								<input type="checkbox" id='5' value='Bass' onChange={this.handleGear}/>
								<span>Bass</span>
							</label>
							<label>
								<input type="checkbox" id='6' value='Guitar' onChange={this.handleGear}/>
								<span>Guitar</span>
							</label>
							<label>
								<input type="checkbox" id='7' value='Synth' onChange={this.handleGear}/>
								<span>Synth</span>
							</label>
							<label>
								<input type="checkbox" id='8' value='Keyboard' onChange={this.handleGear}/>
								<span>Keyboard</span>
							</label>
							<label>
								<input type="checkbox" id='9' value='Amp' onChange={this.handleGear}/>
								<span>Amp</span>
							</label>
							<label>
								<input type="checkbox" id='10' value='Microphone' onChange={this.handleGear}/>
								<span>Microphone</span>
							</label>
						</p>
					</div>
					<label htmlFor="genre">Genres Of Interest</label>
						<br></br>
					<div className="input-field">
						<p>
							<label>
								<input type="checkbox" id='11' value='Techno' onChange={this.handleGenres}/>
								<span>Techno</span>
							</label>
							<label>
								<input type="checkbox" id='12' value='House' onChange={this.handleGenres}/>
								<span>House</span>
							</label>
							<label>
								<input type="checkbox" id='13' value='Hip-Hop' onChange={this.handleGenres}/>
								<span>Hip-Hop</span>
							</label>
							<label>
								<input type="checkbox" id='14' value='Indie-Rock' onChange={this.handleGenres}/>
								<span>Indie Rock</span>
							</label>
							<label>
								<input type="checkbox" id='15' value='Rock' onChange={this.handleGenres}/>
								<span>Rock</span>
							</label>
							<label>
								<input type="checkbox" id='16' value='Funk' onChange={this.handleGenres}/>
								<span>Funk</span>
							</label>
							<label>
								<input type="checkbox" id='17' value='Acoustic' onChange={this.handleGenres}/>
								<span>Acoustic</span>
							</label>
							<label>
								<input type="checkbox" id='18' value='Experimental' onChange={this.handleGenres}/>
								<span>Experimental</span>
							</label>
							<label>
								<input type="checkbox" id='19' value='Folk' onChange={this.handleGenres}/>
								<span>Folk</span>
							</label>
							<label>
								<input type="checkbox" id='20' value='Pop' onChange={this.handleGenres}/>
								<span>Pop</span>
							</label>
						</p>
					</div>
					<div className="input-field">
						<label htmlFor="email">Re-Enter Email</label>
						<br></br>
						<input type="email" id='email' onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="password">Re-Enter Password</label>
						<br></br>
						<input type="password" id='password' onChange={this.handleChange} />
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
