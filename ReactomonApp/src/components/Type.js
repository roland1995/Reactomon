import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Type(props) {
	const Card = styled.div`
		font-weight: bold;
		box-shadow: 0 1px 3px;
		color: #fff;
		background-color: orange;
		&:hover {
			box-shadow: 0 5px 10px;
		}
	`;

	return (
		<div className='col-md-3 col-sm-5 mb-4'>
			<Card className='card'>
				<div className='card-body mx-auto'>
					<h4 className='card-title'>{props.name}</h4>
				</div>
			</Card>
		</div>
	);
}

export default Type;
