import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import PokemonBox from './layout/PokemonBox';
import TypeBox from './layout/TypeBox';

function App() {
	return (
		<Router>
			<div className='App'></div>
			<Navbar />
			<div className='container'></div>
			<Route exact path='/' />
			<Route path='/pokemons' component={() => <PokemonBox />} />
			<Route path='/types' component={() => <TypeBox />} />
		</Router>
	);
}

export default App;
