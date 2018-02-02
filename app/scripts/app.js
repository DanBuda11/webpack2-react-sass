import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Link to="/other">Other Page</Link>
				<h1>Hello World!</h1>


				<img src={require('../images/small.jpg')} />
				<img src={require('../images/big.jpg')} />
			</div>
		);
	}
}