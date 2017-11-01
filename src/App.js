// jshint esversion: 6

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import NewContactContainer from './containers/NewContactContainer';
import ContactListContainer from './containers/ContactListContainer';
// import FilterContainer from './containers/FilterContainer';

class App extends Component {
	render() {
		return (
			<div className="App">

				<NewContactContainer />
				<ContactListContainer />
				{// <Filter /> }
				}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isCreating: state.isCreating,
	newContact: state.newContact,
});

// const mapDispatchToProps = dispatch => ({
	
// });

export default App = connect(mapStateToProps/*, mapDispatchToProps*/)(App);
