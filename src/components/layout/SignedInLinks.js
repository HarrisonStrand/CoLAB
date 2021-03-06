import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
	return (
		<ul className="right">
			<li><NavLink to= '/'>New Post</NavLink></li>
			<li><NavLink to= '/'>Messages</NavLink></li>
			<li><NavLink to= '/'>Collaborators</NavLink></li>
			<li><NavLink to= '/'>Log Out</NavLink></li>
			<li><NavLink to= '/' className='btn btn-floating grey lighten-1'>HS</NavLink></li>
		</ul>
	)
}

export default SignedInLinks