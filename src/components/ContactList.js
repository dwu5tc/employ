// jshint esversion: 6

import React, { Component } from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
	// why not need to call constructor(props) and super(props)?
	componentDidMount() {
		this.props.fetchData('https://gist.githubusercontent.com/amsul/a1efaa7ce7b7c2bae9dc3f2d87d28195/raw/ccc4d12e50b5603c4f6ea00c389e81fb9b353dc3/contacts.json');
	}

	render() {
		return (
			this.props.isLoading 
			? <p>Loading...</p> 
			: <ul className="contact-list">
				{this.props.contacts.map(contact => 
					<Contact
						key={contact.id}
						{...contact}
						onClick={() => this.props.handleContactClick(contact.id)}
					/>
				)}
				</ul>
		);
	}
}

ContactList.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		first_name: PropTypes.string.isRequired,
		last_name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		gender: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		selected: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	isLoading: PropTypes.bool.isRequired,
	fetchData: PropTypes.func.isRequired,
	handleContactClick: PropTypes.func.isRequired
}

