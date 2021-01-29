import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function DetailedView() {
	var url = window.location.href.replace(/\/$/, '');
	var id = url.substr(url.lastIndexOf('/') + 1);
	const [pokemon, setPokemons] = useState([]);
	const sprites = pokemon.sprites;

	const StyledPokemonDetail = styled.div`
		text-align: center;
		padding: 40px;
		width: 960px;
		margin: auto;
		border-radius: 20px;
		position: relative;
		& img:first-of-type {
			padding: 20px;
			width: 20%;
		}
	`;

	const headerStyle = {
		background: '#3336',
		color: 'blue',
		textAlign: 'center',
		padding: '10px',
	};

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
			.then((res) => setPokemons(res.data));
	}, []);

	return (
		<StyledPokemonDetail>
			<div>
				<h2 style={headerStyle}>{pokemon.name}</h2>{' '}
				<img
					src={
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' +
						id +
						'.png'
					}
					alt={pokemon.name}
				/>
				<h4>weight: {pokemon.weight}</h4>
				<h4>height: {pokemon.height}</h4>
			</div>
		</StyledPokemonDetail>
	);
}

export default DetailedView;
