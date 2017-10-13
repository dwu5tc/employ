const CONTACTS_IS_LOADING = 'CONTACTS_IS_LOADING';
const CONTACTS_FETCH_DATA_SUCCESS = 'CONTACTS_FETCH_DATA_SUCCESS';
const CONTACT_IS_CREATING = 'CONTACT_IS_CREATING';
const ADD_CONTACT = 'ADD_CONTACT';
const TOGGLE_CONTACT = 'TOGGLE_CONTACT';
const SET_FILTER = 'SET_FILTER';


export const contactsIsLoading = (bool) => {
	return {
		type: CONTACTS_IS_LOADING,
		isLoading: bool
	};
};

export const contactsFetchDataSuccess = (contacts) => {
	return {
		type: CONTACTS_FETCH_DATA_SUCCESS,
		contacts
	};
};

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
				console.log(response);
				response.json();
			})
			.then(contacts => {
				console.log(contacts);
				dispatch(contactsFetchDataSuccess(contacts))
			});
	}
}

export const contactIsCreating = (bool) => {
	return {
		type: CONTACT_IS_CREATING,
		isCreating: bool
	}
}

export const addContact = (contact) => {
	return {
		type: ADD_CONTACT,
		contact
	}
}

export const toggleContact = (id) => {
	return {
		type: TOGGLE_CONTACT,
		id
	}
}

export const setFilter = (filter) => {
	return {
		type: SET_FILTER,
		filter
	}
}