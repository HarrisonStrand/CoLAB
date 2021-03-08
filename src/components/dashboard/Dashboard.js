import React, { Component } from 'react';
import Notifications from './Notifications';
import PostList from '../posts/PostList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		const { posts, auth } = this.props;
		if (!auth.uid) return <Redirect to='/signin' />
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6" id='posts'>
							<PostList posts = {posts} />
						<div className="col s12 m5 offset-m1" id='notifications'>
							<Notifications />
						</div>
					</div>
				</div>
			</div>
		) 
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		posts: state.firestore.ordered.posts, // post from post reducer prop, then posts from initial state prop
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'posts' }
	])
)(Dashboard)