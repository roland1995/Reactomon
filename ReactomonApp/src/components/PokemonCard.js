import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function PokemonCard(props) {
	const [Id, setPokemonId] = useState('');
	const [Image, setPokemonImage] = useState('');

	useEffect(() => {
		setPokemonId(props.id);
		setPokemonImage(
			`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${Id}.png?raw=true`
		);
	}, [Image, Id, props]);

	const Card = styled.div`
		font-weight: bold;
		text-align: center;
		box-shadow: 0 1px 3px;
		color: #fff;
		background-color: black;
		&:hover {
			box-shadow: 0 6px 10px;
		}
	`;

	const cardHeader = {
		fontWeight: 'bold',
		fontSize: 20,
		color: 'silver',
		backgroundColor: 'blue',
	};

	const StyledImage = styled.img`
		width: 11em;
		height: 11em;
	`;

	return (
		<div className='col-md-3 col-sm-5 mb-4'>
			<Card className='card'>
				<div className='card-header' style={cardHeader}>
					{Id}
				</div>
				<div className='card-body mx-auto'>
					<h5 className='card-title'>{props.name}</h5>
					<StyledImage
						className='card-img-center rounded mx-auto mt-2'
						src={Image}
					/>

					<Link to={'/pokemon/' + props.id}>Details</Link>
				</div>
			</Card>
		</div>
	);
}

export default PokemonCard;
