import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './scripts/app';
import Other from './scripts/other';

const router = (
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="other" component={Other}/>
	</Router>
);

ReactDOM.render(router, document.querySelector('root'));