/*jshint esversion: 6*/

import { connect } from 'react-redux';
import { contactsFetchData, toggleContact } from '../actions';
import ContactList from '../components/ContactList';

const getVisibleContacts = (contacts, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return contacts;
		case 'SHOW_SELECTED':
			return contacts.filter(contact => contact.selected);
		default:
			throw new Error('Unknown filter: ' + filter);
	}
};

const mapStateToProps = state => ({
	contacts: getVisibleContacts(state.contacts, state.filter),
	isLoading: state.contactsIsLoading
});

const mapDispatchToProps = dispatch => ({
	handleContactClick: (id) => dispatch(toggleContact(id)),
	fetchData: (url) => dispatch(contactsFetchData(url))
});

const ContactListContainer = connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactListContainer;