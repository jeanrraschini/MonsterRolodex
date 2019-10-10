import React, { Component } from "react";
import styled from "styled-components";

import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
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

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
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
				<input
					type='search'
					placeholder='Search monster'
					onChange={e =>
						this.setState({ searchField: e.target.value }, () =>
							console.log(this.state.searchField)
						)
					}
				/>
				<AppContainer>
					<CardList monsters={filteredMonsters} />
				</AppContainer>
			</>
		);
	}
}
export default App;
