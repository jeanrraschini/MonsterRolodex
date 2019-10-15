import React, { Component } from 'react';
import styled from 'styled-components';
import { CardList } from '../card-list/card-list.component';
import { SearchBox } from '../searchbox/searchBox.component';

class Main extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: ""
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(data => this.setState({ monsters: data }));
	}

	handleChanges = (e) => {
		this.setState({searchField: e.target.value});
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		const AppContainer = styled.div`
			width: 100%;
			max-width: 1320px;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
		`;

		return (
			<>				
				<SearchBox 
					placeholder='Search monster' 
					handleChanges={handleChanges} />
				<AppContainer>				
					<CardList monsters={filteredMonsters} />
				</AppContainer>
			</>			
		);
	}
}

export default Main;