// jshint esversion: 6

import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => {
		dispatch(setVisibilityFilter(ownProps.filter));
	}
});

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;


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

