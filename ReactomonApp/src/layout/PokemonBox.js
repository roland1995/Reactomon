import React, { useContext } from 'react';
import ListPokemons from '../pages/ListPokemons';
import { ThemeContext } from '../context/Theme';
function Dashboard(props) {
	const [value] = useContext(ThemeContext);

	const boxStyle = {
		backgroundColor: `${value ? 'white' : 'black'}`,
	};

	const headerStyle = {
		background: `${value ? '#ccebff' : '#3339'}`,
		color: `${value ? 'black' : '#fff'}`,
		textAlign: 'center',
		padding: '10px',
	};

	return (
		<div style={boxStyle}>
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
