import React, { useState, useEffect } from 'react';
import { useHttp } from '../hooks/http';
import Type from '../components/Type';

function Types() {
	const [isLoading, fetchedData] = useHttp(
		'https://pokeapi.co/api/v2/type',
		[]
	);

	const types = fetchedData ? fetchedData.data.results : [];
	if (!isLoading) {
		return <div>Loading..</div>;
	} else {
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
}

export default Types;
