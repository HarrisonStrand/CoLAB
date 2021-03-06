import React, { Component } from 'react';
import PostList from '../posts/PostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		const { posts, auth, } = this.props;
		if (!auth.uid) return <Redirect to='/signin' />
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6" id='posts'>
							<PostList posts = {posts} />
					</div>
				</div>
			</div>
		) 
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.firestore.ordered.posts, // post from post reducer prop, then posts from initial state prop
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'posts', orderBy: ['createdAt', 'desc']},
	])
)(Dashboard)