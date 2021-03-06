import React from 'react'

const PostDetail = (props) => {

	const id = props.match.params.id;

	return (
		<div className="container section post-detail">
			<div className="card">
				<div className="card-content">
					<span className="card-title">Post Title - {id}</span>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, a fuga eius est reprehenderit praesentium nemo voluptas nisi? Debitis dolor maiores sequi incidunt ipsa culpa et expedita nisi itaque facilis.</p>
				</div>
				<div className="car-action grey lighten-4 grey-text">
					<div>Posted by Harrison S</div>
					<div>March 5th, 2021</div>
				</div>
			</div>
		</div>
	)
}

export default PostDetail
