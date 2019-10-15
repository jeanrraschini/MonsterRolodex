import React from "react";
import { Card } from "../card/card.component";
import styled from "styled-components";

const ListContainer = styled.div`
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	`;

export const CardList = props => {

	return (
		<ListContainer>
			{props.monsters.map(monster => (
				<Card key={monster.id} monster={monster} />
			))}
		</ListContainer>
	);
};
