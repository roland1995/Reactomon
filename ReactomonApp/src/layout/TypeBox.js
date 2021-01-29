import React from 'react';
import ListTypes from '../pages/ListTypes';
function Dashboard(props) {
	const headerStyle = {
		background: '#3339',
		color: '#fff',
		textAlign: 'center',
		padding: '10px',
	};
	return (
		<div>
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
