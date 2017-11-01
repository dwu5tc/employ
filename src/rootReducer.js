// jshint esversion: 6

import { contacts, 
	contactsIsLoading, 
	contactIsCreating, 
	newContact } from './reducers/contacts';
import filter from './reducers/filter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
	contacts, 
	contactsIsLoading,
	contactIsCreating, 
	newContact, 
	filter 
});

export default rootReducer;