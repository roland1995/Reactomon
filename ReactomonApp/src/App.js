import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import PokemonBox from './layout/PokemonBox';

function App() {
	return (
		<Router>
			<div className='App'></div>
			<Navbar />
			<br />
			<div className='container'></div>
			<Route exact path='/' />
			<Route path='/pokemons' component={() => <PokemonBox />} />
			<Route path='/types' />
		</Router>
	);
}

export default App;
