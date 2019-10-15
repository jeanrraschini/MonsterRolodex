import React from "react";
import styled from "styled-components";

const MonsterCard = styled.div`
		width: 180px;
		text-align: center;
		margin: 32px 0;
		background-color: #95dada;
		border: 1px solid grey;
		border-radius: 5px;
		padding: 25px;
		cursor: pointer;
		-moz-osx-font-smoothing: grayscale;
		backface-visibility: hidden;
		transform: translateZ(0);
		transition: transform 0.25s ease-out;
		&:hover {
			transform: scale(1.05);
		}
	`;


export const Card = props => {
	
	return (
		<MonsterCard>
			<img
				src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
				alt='monster'
			/>
			<h2>{props.monster.name}</h2>
			<p>{props.monster.email}</p>
		</MonsterCard>
	);
};
