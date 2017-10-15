export const contacts = (state = [], action) => {
	switch (action.type) {
		case 'CONTACTS_FETCH_DATA_SUCCESS':
			return action.contacts;
		case 'ADD_CONTACT':
			return [...state, {
				id: action.id,
				firstName: action.firstName,
				lastName: action.lastName,
				email: action.email,
				gender: action.gender,
				phone: action.phone,
				selected: false
			}]
		case 'TOGGLE_CONTACT':
			return state.map(contact => {
				if (contact.id !== action.id) {
					return contact;
				}
				return {
					...contact,
					selected: !contact.selected
				};
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

// export const newContact = (state = {}, action) => {
// 	// switch (action.type) {
// 	// 	case: ''
// 	// }
// 	return state;
// }



