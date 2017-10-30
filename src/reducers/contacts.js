// jshint esversion: 6

export const contacts = (state = [], action) => {
	switch (action.type) {
		case 'CONTACTS_FETCH_DATA_SUCCESS':
			return action.contacts;
		case 'ADD_CONTACT':
			return [...state, {
					// somehow grab the newContact reducer stuff
					...action.contact,
					id: state.length + 1
				}];
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

export const contactsIsLoading = (state = true, action) => {
	switch (action.type) {
		case 'CONTACTS_IS_LOADING':
			return action.isLoading;
		default:
			return state;
	}
};

export const newContact = (state = {}, action) => {
	switch (action.type) {
		case 'NEW_CONTACT_SET_ON_BLUR':
			return ({
				...state,
				...action.contact
			});
		case 'NEW_CONTACT_SET_GENDER':
			return ({
				...state,
				gender: action.gender 
			});
		default:
			return state;
	}
};



