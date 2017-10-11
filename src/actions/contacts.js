export const contactsIsLoading = (bool) => {
	return {
		type: 'CONTACTS_IS_LOADING',
		isLoading: bool
	};
};

export const contactsFetchDataSuccess = (contacts) => {
	return {
		type: 'CONTACTS_FETCH_DATA_SUCCESS',
		contacts
	};
};

export const contactsFetchData(url) {
	return (dispatch) => {
		dispatch(contactIsLoading(true));
	}

	fetch(url)
		.then((res) => {
			if (!res.ok) {
				throw Error(res.statusText);
			}
			dispatch(contactisLoading(false));
			return res;
		})
		.then((res) => res.json())
		.then((contacts) => {
			console.log(contacts, res);
			dispatch(contactsFetchDataSuccess(contacts)))
		});
}