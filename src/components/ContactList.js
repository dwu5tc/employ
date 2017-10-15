import React, { Component } from 'react';
import { contactsFetchData } from '../actions';
import Contact from './Contact'
import PropTypes from 'prop-types';

export default class ContactList extends Component {
	// why not need to call constructor(props) and super(props)?

	componentDidMount() {
		console.log(typeof this.props.fetchData, this.props.fetchData);
		console.log(typeof this.props.isLoading);
		console.log(typeof this.props.onContactClick);
		this.props.fetchData('https://gist.githubusercontent.com/amsul/a1efaa7ce7b7c2bae9dc3f2d87d28195/raw/ccc4d12e50b5603c4f6ea00c389e81fb9b353dc3/contacts.json');
	}

	render() {
		return (
			<div>
				{console.log(this.props.isLoading)}
				
				<h2>hi from contactlist.js</h2>
				<h3>{this.props.isLoading ? 'true' : 'false'}</h3>
			</div>
		);
	}

	// render() {
	// 	return (
	// 		<ul className="contact-list">
	// 			{this.props.contacts.map(contact => 
	// 				<Contact
	// 					key={contact.id}
	// 					name={contact.firstName + " " + contact.lastName}
	// 					phone={contact.phone}
	// 					selected={contact.selected}
	// 					onClick={() => this.props.onContactClick(contact.id)}
	// 				/>
	// 			)}
	// 		</ul>
	// 	);
	// }
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
	// isLoading: PropTypes.bool.isRequired,
	fetchData: PropTypes.func.isRequired,
	onContactClick: PropTypes.func.isRequired
}

