// jshint esversion: 6

export const contacts = (state = [], action) => {
	switch (action.type) {
		case 'CONTACTS_FETCH_DATA_SUCCESS':
			return action.contacts;
		case 'ADD_CONTACT':
			return [...state, action.contact];
		case 'TOGGLE_CONTACT':
			return state.map(contact => {
				if (contact.id !== action.id) {
					return contact;
				}
				return ({
					...contact,
					selected: !contact.selected
				});
			});
		default:
			return state;
	}
};

export const contactsIsLoading = (state = false, action) => {
	switch (action.type) {
		case 'CONTACTS_IS_LOADING':
			return action.isLoading;
		default:
			return state;
	}
};

export const newContact = (state = {}, action) => {
	switch (action.type) {
		case 'NEW_CONTACT_SET_GENDER':
			return ({
				...state,
				gender: action.gender 
			});
		case 'NEW_CONTACT_SET_FIRST_NAME':
			return ({
				...state,
				first_name: action.first_name
			});
		case 'NEW_CONTACT_SET_LAST_NAME':
			return ({
				...state,
				last_name: action.last_name
			});
		case 'NEW_CONTACT_SET_PHONE':
			return ({
				...state,
				phone: action.phone
			});
		case 'NEW_CONTACT_SET_EMAIL':
			return ({
				...state,
				email: action.email
			});
		default:
			return state;
	}
};



