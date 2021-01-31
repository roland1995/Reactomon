import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/Theme';
import styled from 'styled-components';

function Navbar() {
	const [value, setValue] = useContext(ThemeContext);

	const headerStyle = {
		background: `${value ? '#99d6ff' : '#333'}`,
		color: `${value ? 'black' : '#fff'}`,
		textAlign: 'center',
		padding: '10px',
	};

	const Button = styled.button`
		color: '#fff';
		background-color: '#333';
		position: absolute;
		right: 10px;
	`;

	const linkStyle = {
		color: `${value ? 'black' : '#fff'}`,
		textDecoration: 'none',
	};
	return (
		<header style={headerStyle}>
			<h1>
				<Link style={linkStyle} to='/'>
					Roland's Reactomons
				</Link>
			</h1>
			<Link style={linkStyle} to='/pokemons'>
				Pokemons
			</Link>{' '}
			|{' '}
			<Link style={linkStyle} to='/types'>
				Types
			</Link>
			<Button
				onClick={() =>
					value === true ? setValue(false) : setValue(true)
				}
			>
				Change theme
			</Button>
		</header>
	);
}

export default Navbar;
