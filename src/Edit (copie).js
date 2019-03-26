import React, { Component } from 'react';


export default class Edit extends Component {
	constructor(props) {
		super(props);

		this.state = {
			characters: [],
		};
		this.changeShortDescription = this.changeShortDescription.bind(this);
		this.changeDescription = this.changeDescription.bind(this);

	}

	changeShortDescription(event) {
		let newState = {characters:{...this.characters}};
		newState.shortDescription = event.target.value;
		this.setState(newState);
	}

	changeDescription(event) {
		let newState = {characters:{...this.characters}};
		newState.description = event.target.value;
		this.setState(newState);
	}

	componentDidMount() {
		fetch('https://character-database.becode.xyz/characters/' + this.props.match.params.id)
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					characters: result
				});
			}
			)
	}
	
	render() {
		const {characters} = this.state;
		console.log({characters});

		return (
			
			<div className="Edit">
				<h1> Edition page </h1>
				<form>
					<input type="text" name="name" defaultValue={characters.name}></input>
					<input type="file" name="image" />
					<textarea type="text" name="shortDescription"  value={characters.shortDescription} onChange={this.changeShortDescription}/>
					<textarea type="text" name="description" value={characters.description} onChange={this.changeDescription}/>
					<input type="submit" name="editSubmit" value="Save changes"/>
				</form>
			</div>
			);
	}
}