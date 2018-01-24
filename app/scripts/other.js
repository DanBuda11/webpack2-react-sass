import React from 'react';
import { Link } from 'react-router';

class Other extends React.Component {
	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<h1>Hello from Other Page!</h1>
			</div>
		);
	}
};

export default Other;