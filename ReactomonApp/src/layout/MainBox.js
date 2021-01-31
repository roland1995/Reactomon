import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/Theme';

export default function MainBox() {
	const [value] = useContext(ThemeContext);

	const StyledImage = styled.img`
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	`;

	const boxStyle = {
		backgroundColor: `${value ? 'white' : 'black'}`,
	};

	const footerStyle = {
		position: 'absolute',
		bottom: '0',
		textAlign: 'center',
		padding: '3px',
		backgroundColor: `${value ? 'white' : 'black'}`,
		color: 'lightBlue',
	};

	return (
		<div style={boxStyle}>
			<br></br>
			<StyledImage
				src={
					'https://res.cloudinary.com/lmn/image/upload/e_sharpen:150,f_auto,fl_lossy,q_80/v1/gameskinnyc/e/p/0/ep001-5ef7f.png'
				}
			/>

			<footer style={footerStyle}>Made by Horváth Roland</footer>
		</div>
	);
}
