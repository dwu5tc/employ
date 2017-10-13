import { contacts } from './reducers/contacts';
import filter from './reducers/filter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ contacts, filter });

export default rootReducer;