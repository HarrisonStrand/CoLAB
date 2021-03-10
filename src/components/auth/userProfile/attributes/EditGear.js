import React, { Component, } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase'
import { editUserProfile } from '../../../store/actions/auth-actions';

class EditUserProfile extends Component {

	state = {
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
					<h5 className="grey-text text-darken-3">Edit Gear</h5>
						<label htmlFor="Gear">Gear</label>
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
