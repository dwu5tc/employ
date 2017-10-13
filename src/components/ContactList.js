import React, { Component } from 'react';
import { contactsFetchData } from '../actions';
import Contact from './Contact'
import PropTypes from 'prop-types';

export default class ContactList extends Component {
	componentDidMount() {
		this.props.fetchData('https://gist.githubusercontent.com/\
			amsul/a1efaa7ce7b7c2bae9dc3f2d87d28195/raw/\
			ccc4d12e50b5603c4f6ea00c389e81fb9b353dc3/contacts.json');
	}

	render() {
		return (
			<ul className="contact-list">
				{this.props.contacts.map(contact => 
					<Contact
						key={contact.id}
						name={contact.firstName + " " + contact.lastName}
						phone={contact.phone}
						selected={contact.selected}
						onClick={() => this.props.onContactClick(contact.id)}
					/>
				)}
			</ul>
		);
	}
}

ContactList.propTypes = {
	// contacts: PropTypes.arrayOf(PropTypes.shape({
	// 	id:
	// 	firstName:
	// 	lastName:
	// 	email:
	// 	gender:
	// 	phone:
	// 	selected 
	// }).isRequired).isRequired,
	contacts: PropTypes.array.isRequired,
	onContactClick: PropTypes.func.isRequired
}

