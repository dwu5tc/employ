/*jshint esversion: 6*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newContactSetGender, newContactSetOnBlur, addContact } from '../actions';
import NewContact from '../components/NewContact';

const mapStateToProps = state => ({
	contacts: state.contacts,
	newContact: state.newContact,
	isLoading: state.contactsIsLoading
});

const mapDispatchToProps = dispatch => ({
	handleNewContactBlur: (contact) => dispatch(newContactSetOnBlur(contact)),
	handleGenderSelect: (gender) => dispatch(newContactSetGender(gender)),
	handleNewContactSubmit: (contact) => dispatch(addContact(contact)),
});

const NewContactContainer = connect(mapStateToProps, mapDispatchToProps)(NewContact);

export default NewContactContainer; // why necessary to export???