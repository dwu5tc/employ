// jshint esversion: 6

// import fetch from 'isomorphic-fetch';

const CONTACTS_IS_LOADING = 'CONTACTS_IS_LOADING';
const CONTACTS_FETCH_DATA_SUCCESS = 'CONTACTS_FETCH_DATA_SUCCESS';
const CONTACT_IS_CREATING = 'CONTACT_IS_CREATING';
const ADD_CONTACT = 'ADD_CONTACT';
const TOGGLE_CONTACT = 'TOGGLE_CONTACT';
const SET_FILTER = 'SET_FILTER';
const NEW_CONTACT_SET_ON_BLUR = 'NEW_CONTACT_SET_ON_BLUR';
const NEW_CONTACT_SET_GENDER = 'NEW_CONTACT_SET_GENDER';
// const NEW_CONTACT_SET_FIRST_NAME = 'NEW_CONTACT_SET_FIRST_NAME';
// const NEW_CONTACT_SET_LAST_NAME = 'NEW_CONTACT_SET_LAST_NAME';
// const NEW_CONTACT_SET_PHONE = 'NEW_CONTACT_SET_PHONE';
// const NEW_CONTACT_SET_EMAIL = 'NEW_CONTACT_SET_EMAIL';

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

// export const newContactSetField = (field) => ({
// 	return dispatch => {
// 		switch (field):
// 			case ''
// 	}
// })

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

// export const newContactSetFirstName = (first) => ({
// 	type: NEW_CONTACT_SET_FIRST_NAME,
// 	first
// });

// export const newContactSetLastName = (last) => ({
// 	type: NEW_CONTACT_SET_LAST_NAME,
// 	last
// });

// export const newContactSetPhone = (phone) => ({
// 	type: NEW_CONTACT_SET_PHONE,
// 	phone
// });

// export const newContactSetEmail = (email) => ({
// 	type: NEW_CONTACT_SET_EMAIL,
// 	email
// });

export const addContact = (contact) => ({
	type: ADD_CONTACT,
	contact: {
		...contact,
		selected: false
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