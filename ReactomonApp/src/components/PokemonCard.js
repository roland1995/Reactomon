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
		border-radius: 25px;
		font-weight: bold;
		text-align: center;
		box-shadow: 0 1px 3px;
		color: #fff;
		background-color: Purple;
		&:hover {
			box-shadow: 0 6px 10px;
		}
	`;

	const cardHeader = {
		borderRadius: '20px',
		fontFamily: 'Verdana',
		textShadow: '1px 1px 0 #444',
		fontWeight: 'bold',
		fontSize: 20,
		background: 'Aqua',
		color: 'gray',
	};

	const StyledImage = styled.img`
		width: 12em;
		height: 12em;
	`;

	return (
		<div className='col-md-3 col-sm-5 mb-4'>
			<Link to={'/pokemon/' + props.id}>
				<Card className='card'>
					<div className='card-header mx-auto' style={cardHeader}>
						<h3 className='card-title'>{props.name}</h3>
					</div>
					<div className='card-body mx-auto'>
						<StyledImage
							className='card-img-center rounded mx-auto mt-2'
							src={Image}
						/>
					</div>
					Click for Details
				</Card>
			</Link>
		</div>
	);
}

export default PokemonCard;
