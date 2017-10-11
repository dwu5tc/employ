import contacts from './reducers/contacts';
import filter from './reducers/filter';
import { combineReducers } from 'redux';

export default const App = combineReducers({ contacts, filter });