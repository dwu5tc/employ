/*jshint esversion: 6*/

import { connect } from 'react-redux';
import { newContactSetGender, newContactSetOnBlur, addContact } from '../actions';
import NewContact from '../components/NewContact';

const mapStateToProps = state => ({
	newContact: state.newContact,
});

const mapDispatchToProps = dispatch => ({
	handleNewContactBlur: (contact) => dispatch(newContactSetOnBlur(contact)),
	handleGenderSelect: (gender) => dispatch(newContactSetGender(gender)),
	handleNewContactSubmit: (contact) => dispatch(addContact(contact)),
});

const NewContactContainer = connect(mapStateToProps, mapDispatchToProps)(NewContact);

export default NewContactContainer; // why necessary to export???