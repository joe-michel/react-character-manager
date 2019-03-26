import React, { Component } from 'react';
import Axios from 'axios';

export default class Edit extends Component {
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
		let characterId = this.props.match.params.id;
		Axios.put("https://character-database.becode.xyz/characters/" + this.props.match.params.id, this.state);
		this.props.history.push(`/character/${characterId}`);
	}

	componentDidMount() {
		fetch('https://character-database.becode.xyz/characters/' + this.props.match.params.id)
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result);
				this.setState(result);
			})
	}
	
	render() {
		const {name, shortDescription, description} = this.state;
		return (
			<div className="Edit">
				<h1>Edition page</h1>
				<div className="editForm">
					<form onSubmit={this.onSubmit}>
						<p>New character name</p>
						<input type="text" name="name" value={name} onChange={this.updateState}></input>
						<p>New short description</p>
						<textarea type="text" name="shortDescription"  value={shortDescription} onChange={this.updateState}/>
						<p>New description</p>
						<textarea type="text" name="description" value={description} onChange={this.updateState}/>
						<input className="submitEdit" type="submit" name="editSubmit" value="Save changes"/>
					</form>
				</div>
			</div>
			);
	}
}