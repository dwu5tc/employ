import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <AddContact /> */}
				<ContactList />
				<Filter />


				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}
