import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Type from '../components/Type';

function Types() {
	const [types, setTypes] = useState([]);

	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/type')
			.then((res) => setTypes(res.data.results));
	}, []);

	return (
		<div className='row'>
			{types.map((type) => (
				<Type
					key={type.url.split('type/')[1].replace('/', '')}
					name={type.name}
					url={type.url}
				/>
			))}
		</div>
	);
}

export default Types;
