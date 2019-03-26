import React, { Component } from 'react';
import Upper from './Upper';
import Bottom from './Bottom';
import Footer from './Footer';

export default class Main extends Component {
	render() {
		return (
			<div className="Main">
				<Upper />
				<Bottom />
			</div>
		);
	}
}