import React from 'react';
import ListPokemons from '../pages/ListPokemons';
function Dashboard(props) {
	const headerStyle = {
		background: '#3339',
		color: '#fff',
		textAlign: 'center',
		padding: '10px',
	};

	return (
		<div>
			<h3 style={headerStyle}>Pokemons</h3>
			<div className='row'>
				<div className='col'>
					<ListPokemons />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
