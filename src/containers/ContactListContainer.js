import React, { Component, PropTypes } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleContact } from '../actions'
import ContactList from '../components/ContactList';

const getVisibleContacts = (contacts, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return contacts;
		case 'SHOW_SELECTED'
			return contacts.filter(contact => contact.selected);
		default:
			throw new Error('Unknown filter: ' + filter);
	}
}

ContactListContainer.propTypes = {
	fetchData: PropTypes.func.isRequired,
	contacts: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
	contacts: getVisibleContacts(state.contacts.present, state.filter)
}

// const mapDispatchToProps = ({
// 	onContactClick: toggleContact
// })

const mapDispatchToProps = dispatch => {
	onContactClick: toggleContact
}

const ContactListContainer = connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactListContainer;