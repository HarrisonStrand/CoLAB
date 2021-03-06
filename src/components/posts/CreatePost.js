import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../store/actions/post-actions';

class CreatePost extends Component {

	state = {
		title: '',
		message: ''
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.createPost(this.state)
	}

	render() {
		return (
			<div className='container'>
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Create Post</h5>
					<div className="input-field">
						<label htmlFor="title">Title</label>
						<input type="text" id='title'onChange={this.handleChange} />
					</div>
					<div className="input-field">
						<label htmlFor="message">Message:</label>
						<textarea id="message" className="materialize-textarea" onChange={this.handleChange}></textarea>
					</div>
					<div className="input-field">
						<button className="btn blue lighten-1">Post</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createPost: (post) => dispatch(createPost(post))
	}
}

export default connect(null, mapDispatchToProps)(CreatePost)
