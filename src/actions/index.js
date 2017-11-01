// jshint esversion: 6

// import fetch from 'isomorphic-fetch';

const CONTACTS_IS_LOADING = 'CONTACTS_IS_LOADING';
const CONTACTS_FETCH_DATA_SUCCESS = 'CONTACTS_FETCH_DATA_SUCCESS';
const CONTACT_IS_CREATING = 'CONTACT_IS_CREATING';
const ADD_CONTACT = 'ADD_CONTACT';
const ADD_CONTACT_ERROR = 'ADD_CONTACT_ERROR';
const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
const TOGGLE_CONTACT = 'TOGGLE_CONTACT';
const SET_FILTER = 'SET_FILTER';
const NEW_CONTACT_SET_ON_BLUR = 'NEW_CONTACT_SET_ON_BLUR';
const NEW_CONTACT_SET_GENDER = 'NEW_CONTACT_SET_GENDER';

export const contactsIsLoading = (bool) => ({
	type: CONTACTS_IS_LOADING,
	isLoading: bool
});

export const contactsFetchDataSuccess = (contacts) => ({
	type: CONTACTS_FETCH_DATA_SUCCESS,
	contacts: contacts.map(contact => ({
		...contact, // maybe switch underscores to camel case? 
		selected: false
	}))
});

export const contactsFetchData = (url) => {
	return dispatch => {
		dispatch(contactsIsLoading(true));
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				dispatch(contactsIsLoading(false));
				return response;
			})
			.then(response => {
				return response.json(); // returns a promise 
			})
			.then(contacts => {
				return dispatch(contactsFetchDataSuccess(contacts));
			});
	};
};

export const contactIsCreating = (bool) => ({
	type: CONTACT_IS_CREATING,
	isCreating: bool
});

export const newContactSetOnBlur = (contact) => ({
	type: NEW_CONTACT_SET_ON_BLUR,
	contact
});

export const newContactSetGender = (gender) => ({
	type: NEW_CONTACT_SET_GENDER,
	gender
});

export const addContactError = (error) => ({
	type: ADD_CONTACT_ERROR,
	error
})

export const addContactSuccess = (contact) => ({
	type: ADD_CONTACT,
	contact: {
		...contact,
		selected: false
	}
})

export const addContact = (contact) => ({
	return dispatch => {

	}
	
});

export const toggleContact = (id) => ({
	type: TOGGLE_CONTACT,
	id
});

export const setFilter = (filter) => ({
	type: SET_FILTER,
	filter
});