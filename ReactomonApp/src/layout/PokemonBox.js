import React from 'react';
import ListPokemons from '../pages/ListPokemons';
function Dashboard(props) {
	return (
		<div className='row'>
			<div className='col'>
				<ListPokemons />
			</div>
		</div>
	);
}

export default Dashboard;
