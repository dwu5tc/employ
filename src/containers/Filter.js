// jshint esversion: 6

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactList from '../components/ContactList';

class ContactListContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {

	}
}

ContactListContainer.propTypes = {
	fetchData: PropTypes.func.isRequired,
	contacts: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {

	return {
		contacts: state.contacts,

	}
}

const mapDispatchToProps = (dispatch) => {
	
}

export default connect(mapStateToProps)(App)


