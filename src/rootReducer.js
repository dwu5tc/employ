// jshint esversion: 6

import { contacts, contactsIsLoading } from './reducers/contacts';
import filter from './reducers/filter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ contacts, contactsIsLoading, filter });

export default rootReducer;