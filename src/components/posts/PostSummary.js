import React from 'react';

const PostSummary = ({post}) => {
	return (
		<div className="card post-summary">
		<div className="card-content grey-text text-darken-3">
			<span className="card-title">{post.title}</span>
			<p>Posted by Ralph</p>
			<p className='grey-text'>date here...</p>
		</div>
	</div>
	)
}

export default PostSummary;