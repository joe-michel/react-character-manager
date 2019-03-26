import React, { Component } from 'react';
import Axios from 'axios';
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown')


class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };

    this.onDelete = this.onDelete.bind(this);
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

  onDelete(event){
    let x = window.confirm("Are you sure ?");
    if(x == true){
      event.preventDefault();
      Axios.delete("https://character-database.becode.xyz/characters/" + this.props.match.params.id);
      this.props.history.push('/');
    }
  }

  componentDidUpdate() {
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
  		console.log(this.state);

		return (
		<div className="characterPage">
		<h1 className="characterTitle">Character Page: { characters.name }</h1>
			<div className="characterContent">
				<img src={`data:image/jpeg;base64,${characters.image}`} className="imageBig" alt="avatar.png" width="150px" height="150px"/>
				<h2 className="characterName"> {characters.name} </h2>
				<p className="Description"> {characters.shortDescription} </p>
				<ReactMarkdown source={characters.description} escapeHtml={false} />
			</div>
			<div className="Buttons">
				<a className="EditButton" href={`/Edit/${characters.id}`}> Edit "{ characters.name }" </a>
				<button className="Delete" onClick={this.onDelete}> Delete "{ characters.name }" </button>
			</div>
      <a className="homeButton" href="/">Homepage</a>
		</div>
		);
	}
}

export default Character;
