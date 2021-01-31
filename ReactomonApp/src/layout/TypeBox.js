import React, { useContext } from 'react';
import ListTypes from '../pages/ListTypes';
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
			<h3 style={headerStyle}>Types</h3>
			<div className='row'>
				<div className='col'>
					<ListTypes />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
