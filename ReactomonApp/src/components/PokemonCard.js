import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function PokemonCard(props) {
	const [Image, setPokemonImage] = useState('');
	const [Index, setPokemonIndex] = useState('');

	useEffect(() => {
		setPokemonIndex(props.url.split('pokemon/')[1].replace('/', ''));
		setPokemonImage(
			`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${Index}.png?raw=true`
		);
	}, [Image, Index, props]);

	const Card = styled.div`
		font-weight: bold;
		box-shadow: 0 1px 3px;
		color: #fff;
		background-color: black;
		&:hover {
			box-shadow: 0 5px 10px;
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
					{Index}
				</div>
				<div className='card-body mx-auto'>
					<h6 className='card-title'>{props.name}</h6>
					<StyledImage
						className='card-img-center rounded mx-auto mt-2'
						src={Image}
					/>
				</div>
			</Card>
		</div>
	);
}

export default PokemonCard;
