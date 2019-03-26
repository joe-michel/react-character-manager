import React, { Component } from 'react';
import Axios from 'axios';

export default class Create extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			description: '',
			shortDescription: ''
		};
		this.updateState = this.updateState.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	updateState(event) {
		const {target: {value, name}} = event;
		let obj = {};
		obj[name] = value;
		this.setState(obj);
	}

	onSubmit(data) {
		data.preventDefault();
		Axios.post("https://character-database.becode.xyz/characters/", this.state);
		this.props.history.push('/');
	}
	
	render() {
		const {name, shortDescription, description} = this.state;
		return (
			<div className="Create">
				<h1>Edition page</h1>
				<div className="editForm">
					<form onSubmit={this.onSubmit}>
						<p>Character name</p>
						<input type="text" name="name" onChange={this.updateState}></input>
						<p>Short description</p>
						<textarea type="text" name="shortDescription" onChange={this.updateState}/>
						<p>Description</p>
						<textarea type="text" name="description" onChange={this.updateState}/>
						<input className="submitEdit" type="submit" name="editSubmit" value="Create"/>
					</form>
				</div>
			</div>
			);
	}
}