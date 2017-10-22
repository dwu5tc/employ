/*jshint esversion: 6 */

// import fetch from 'isomorphic-fetch';

const CONTACTS_IS_LOADING = 'CONTACTS_IS_LOADING';
const CONTACTS_FETCH_DATA_SUCCESS = 'CONTACTS_FETCH_DATA_SUCCESS';
const CONTACT_IS_CREATING = 'CONTACT_IS_CREATING';
const ADD_CONTACT = 'ADD_CONTACT';
const TOGGLE_CONTACT = 'TOGGLE_CONTACT';
const SET_FILTER = 'SET_FILTER';

export const contactsIsLoading = (bool) => ({
	type: CONTACTS_IS_LOADING,
	isLoading: bool
});

export const contactsFetchDataSuccess = (contacts) => ({
	type: CONTACTS_FETCH_DATA_SUCCESS,
	contacts
});

export const contactsFetchData = (url) => {

	console.log('contacts fetch data here');
	return (dispatch) => {
		console.log('wtf');
		dispatch(contactsIsLoading(true));
		console.log('hehrehrhehre');
		fetch(url)
			.then((response) => {
				console.log('then here');
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				dispatch(contactsIsLoading(false));
				console.log('then here 2');
				return response;
			})
			.then(response => {
				console.log('then then here');
				console.log(response);
				return response.json();
			})
			.then(contacts => {
				console.log('then then then here');
				console.log(contacts);
				return dispatch(contactsFetchDataSuccess(contacts));
			});
	};
};

export const contactIsCreating = (bool) => ({
	type: CONTACT_IS_CREATING,
	isCreating: bool
});

export const addContact = (contact) => ({
	type: ADD_CONTACT,
	contact
});

export const toggleContact = (id) => ({
	type: TOGGLE_CONTACT,
	id
});

export const setFilter = (filter) => ({
	type: SET_FILTER,
	filter
});

// function(next) {
// 	return function(action) {
// 		console.log('will dispatch', action)

// 		// Call the next dispatch method in the middleware chain.
// 		let returnValue = next(action)

// 		console.log('state after dispatch', getState())

// 		// This will likely be the action itself, unless
// 		// a middleware further in chain changed it.
// 		return returnValue
// 	}
// }