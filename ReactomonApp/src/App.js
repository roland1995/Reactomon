import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import PokemonBox from './layout/PokemonBox';
import TypeBox from './layout/TypeBox';
import DetailedView from './pages/DetailedView';

function App() {
	return (
		<Router>
			<div className='App'></div>
			<Navbar />
			<div className='container'></div>
			<Route exact path='/' />
			<Route path='/pokemons' component={() => <PokemonBox />} />
			<Route path='/types' component={() => <TypeBox />} />
			<Route path='/pokemon' component={() => <DetailedView />} />
		</Router>
	);
}

export default App;
