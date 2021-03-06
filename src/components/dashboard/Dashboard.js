import React, { Component } from 'react';
import Notifications from './Notifications';
import PostList from '../posts/PostList';

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6" id='posts'>
							<PostList />
						<div className="col s12 m5 offset-m1" id='notifications'>
							<Notifications />
						</div>
					</div>
				</div>
			</div>
		) 
	}
}

export default Dashboard;