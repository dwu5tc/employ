/*jshint esversion: 6*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsFetchData, toggleContact } from '../actions';
import ContactList from '../components/ContactList';

const mapStateToProps = state => ({
	contacts: state.contacts,
	newContact: state.newContact
})

const mapDispatchToProps = dispatch => ({
	handleFirst: (first) => dispathc(newContactSetFirst(first)),
	handleLast: (last) => dispatch(newContactSetLast(last)),
	handleGender: (gender) => dispatch(newContactSetGender(gender)),
	handlePhone: (phone) => dispatch(newContactSetPhone(phone)),
	handleEmail: (email) => dispatch(newContactSetEmail(email)),
	handleSubmit: (contact) => dispatch(newContact(contact)),
});

const NewContactContainer = connect(mapStateToProps, mapDispatchToProps)(NewContact);

export default NewContactContainer; // why necessary to export???