import React from 'react';
import PokemonCard from '../components/PokemonCard';
import { useHttp } from '../hooks/http';

function PokemonList() {
	const [isLoading, fetchData] = useHttp(
		'https://pokeapi.co/api/v2/pokemon/',
		[]
	);

	const pokemons = fetchData ? fetchData.data.results : [];

	if (!isLoading) {
		return <div>Loading..</div>;
	} else {
		return (
			<div className='row'>
				{pokemons.map((pokemon) => (
					<PokemonCard
						key={pokemon.url.split('pokemon/')[1].replace('/', '')}
						name={pokemon.name}
						url={pokemon.url}
						id={pokemon.url
							.replace(/\/$/, '')
							.substr(
								pokemon.url
									.replace(/\/$/, '')
									.lastIndexOf('/') + 1
							)}
					/>
				))}
			</div>
		);
	}
}

export default PokemonList;
