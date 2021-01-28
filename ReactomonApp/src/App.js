import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import axios from 'axios';

export default class App extends Component {
	static displayName = App.name;

	render() {
		return (
			<Router>
				<div className='App'>
					<div className='container'>
						<Navbar />
					</div>
				</div>
			</Router>
		);
	}
}
