import styled from 'styled-components';
import React from 'react';
import { useHttp } from '../hooks/http';
function DetailedView() {
	var url = window.location.href.replace(/\/$/, '');
	var id = url.substr(url.lastIndexOf('/') + 1);

	const [isLoading, fetchedData] = useHttp(
		`https://pokeapi.co/api/v2/pokemon/${id}`,
		[]
	);

	const pokemon = fetchedData
		? {
				name: fetchedData.data.name,
				height: fetchedData.data.height,
				weight: fetchedData.data.weight,
				imageUrl: fetchedData.data.sprites.front_default,
		  }
		: [];

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
	if (!isLoading) {
		return <div>Loading..</div>;
	} else {
		return (
			<StyledPokemonDetail>
				<div>
					<h2 style={headerStyle}>{pokemon.name}</h2>{' '}
					<img src={pokemon.imageUrl} alt={pokemon.name} />
					<h4>weight: {pokemon.weight}</h4>
					<h4>height: {pokemon.height}</h4>
				</div>
			</StyledPokemonDetail>
		);
	}
}

export default DetailedView;
