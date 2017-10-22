// jshint esversion: 6

export const contacts = (state = [], action) => {
	switch (action.type) {
		case 'CONTACTS_FETCH_DATA_SUCCESS':
			return action.contacts;
		case 'ADD_CONTACT':
			return [...state, {
				id: action.id,
				first_name: action.firstName, // underscores for sake of consistency with fetched data
				last_name: action.lastName,
				email: action.email,
				gender: action.gender,
				phone: action.phone,
				selected: false
			}];
		case 'TOGGLE_CONTACT':
			console.log("toggling", action.id);
			return state.map(contact => {
				if (contact.id !== action.id) {
					return contact;
				}
				console.log('found', contact.id, contact.selected, !contact.selected);
				var temp = ({
					...contact,
					selected: !contact.selected
				});
				console.log(temp);
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
		case: 'NEW_CONTACT_SET_GENDER':
			return
		case: 'NEW_CONTACT_SET_FIRST_NAME':
			return 
		case: 'NEW_CONTACT_SET_LAST_NAME':
			return 
		case: 'NEW_CONTACT_SET_':
			return 
		case: 'NEW_CONTACT_SET_GENDER':
			return  
	}
	return state;
}



