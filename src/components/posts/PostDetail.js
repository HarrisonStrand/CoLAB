import React from 'react'
import { connect } from 'react-redux';
import { firebaseConnect, firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const PostDetail = (props) => {

	const { post, auth } = props;
	if (!auth.uid) return <Redirect to='/signin' />
	if (post) {
		return (
			<div className="container section post-detail">
			<div className="card">
				<div className="card-content">
					<span className="card-title">{ post.title }</span>
					<p>{ post.message }</p>
				</div>
				<div className="car-action grey lighten-4 grey-text">
					<div>Posted by { post.authorFirstName} {post.authorLastName}</div>
					<div>March 5th, 2021</div>
				</div>
			</div>
		</div>
		)
	} else {
		return (
			<div className="container center">
				<p>Loading Post...</p>
			</div>
		)
	}
}
		


const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const posts = state.firestore.data.posts;
	const post = posts ? posts[id] : null
	return {
		post: post,
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'posts' }
	])
)(PostDetail)
