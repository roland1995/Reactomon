import React from 'react';
import styled from 'styled-components';

export default function MainBox() {
	const StyledImage = styled.img`
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	`;
	return (
		<div>
			<br></br>
			<StyledImage
				src={
					'https://res.cloudinary.com/lmn/image/upload/e_sharpen:150,f_auto,fl_lossy,q_80/v1/gameskinnyc/e/p/0/ep001-5ef7f.png'
				}
			/>
		</div>
	);
}
