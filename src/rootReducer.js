// jshint esversion: 6

import { contacts, contactsIsLoading, newContact } from './reducers/contacts';
import filter from './reducers/filter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
	contacts, 
	contactsIsLoading, 
	newContact, 
	filter 
});

export default rootReducer;