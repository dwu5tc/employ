export const contacts = (state = [], action) => {
	switch (action.type) {
		case 'CONTACTS_FETCH_DATA_SUCCESS':
			return action.contacts;
		case 'ADD_CONTACT':
			return [...state, {
				id: action.id,
				name: action.name,
				selected: false
			}]
		case 'TOGGLE_CONTACT':
			return state.map(contact => {
				if (contact.id !== action.id) {
					return contact;
				}
				return {
					...contact,
					selected: !contact.selecfted
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
}

