import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

function PokemonList() {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon/')
			.then((res) => setPokemons(res.data.results));
	}, []);
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
							pokemon.url.replace(/\/$/, '').lastIndexOf('/') + 1
						)}
				/>
			))}
		</div>
	);
}

export default PokemonList;
