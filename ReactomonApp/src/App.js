import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import PokemonBox from './layout/PokemonBox';
import TypeBox from './layout/TypeBox';
import DetailedView from './pages/DetailedView';
import MainBox from './layout/MainBox';

function App() {
	return (
		<Router>
			<div className='App'></div>
			<Navbar />
			<Route exact path='/' component={() => <MainBox />} />
			<Route path='/pokemons' component={() => <PokemonBox />} />
			<Route path='/types' component={() => <TypeBox />} />
			<Route path='/pokemon' component={() => <DetailedView />} />
		</Router>
	);
}

export default App;
