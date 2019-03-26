import React, { Component } from 'react';

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch('https://character-database.becode.xyz/characters')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            characters: result
          });
        }
      )
  }

  componentDidUpdate() {
    fetch('https://character-database.becode.xyz/characters')
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

		return (
    <div className="characters" >
      <div className="newCharacter">
        <a href="/create" className="createButton" > Create New character </a>
      </div>
  		<div className="cards">

  				{characters.map(characters =>
  				
  			<div className="card">
  				<img src={`data:image/jpeg;base64,${characters.image}`} className="image" alt="#" width="150px" height="150px"/>
  				<div className="card-body">
  					<h5 className="card-title">{characters.name}</h5>
  					<p className="card-text">{characters.shortDescription}</p>
  				</div>
  				<div className="card-footer">
  					<a className="character-link" href={`/character/${characters.id}`}>View more</a>
  				</div>
  			</div>
  		)}
  		</div>
    </div>
		);
	}
}

export default Characters;