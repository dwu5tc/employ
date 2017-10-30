// jshint esversion: 6

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewContactContainer from './containers/NewContactContainer';
import ContactListContainer from './containers/ContactListContainer';
import Filter from './components/Filter';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<NewContactContainer />
				<ContactListContainer />
				{/* <Filter /> */}
				{/* <h2>hello from app.js</h2> */}
			</div>
		);
	}
}
