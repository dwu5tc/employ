/*jshint esversion: 6*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewContact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contact: {
				first_name: '',
				last_name: '',
				phone: '',
				email: ''
			}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(prop, e) {
		const temp = {
			...this.state.contact,
			[prop]: e.target.value
		};
		this.setState({ 
			contact: temp
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.handleNewContactSubmit(this.props.newContact); // or maybe just submit with the react state contact???
		this.setState({
			contact: {
				first_name: '',
				last_name: '',
				phone: '',
				email: ''
			}
		});
	}

	render() {
		return (
			<form className='new-contact'
				onSubmit={this.handleSubmit}>
				{//this.props.errorMessage}
				}
				<label>
				First Name
					<input type='text'
						onBlur={this.props.handleNewContactBlur.bind(this, this.state.contact)}
						onChange={this.handleChange.bind(this, 'first_name')}
						name='first_name'
						value={this.state.contact.first_name}
					/>
				</label>
				<label>
				Last Name
					<input type='text'
						onBlur={this.props.handleNewContactBlur.bind(this, this.state.contact)}
						onChange={this.handleChange.bind(this, 'last_name')}
						name='last_name'
						value={this.state.contact.last_name}
					/>
				</label>
				<label>
				Gender
					<label>
					Male
					<input type="radio"
						onClick={this.props.handleGenderSelect.bind(this, 'male')}
						name='gender_male'
						checked={this.props.newContact.gender === 'male'}
					/>
					</label>
					<label>
					Female
					<input type='radio'
						onClick={this.props.handleGenderSelect.bind(this, 'female')}
						name='gender_female'
						checked={this.props.newContact.gender === 'female'}
					/>
					</label>
				</label>
				<label>
				Phone
					<input type='text'
						onBlur={this.props.handleNewContactBlur.bind(this, this.state.contact)}
						onChange={this.handleChange.bind(this, 'phone')}
						name='phone'
						value={this.state.contact.phone}
					/>
				</label>
				<label>
				Email:
					<input type='text'
						onBlur={this.props.handleNewContactBlur.bind(this, this.state.contact)}
						onChange={this.handleChange.bind(this, 'email')}
						name='email'
						value={this.state.contact.email}
					/>
				</label>
				<input type='submit' value='Add Contact' />
			</form>
		);
	}
}

NewContact.propTypes = {
	newContact: PropTypes.object.isRequired,
	handleNewContactBlur: PropTypes.func.isRequired,
	handleGenderSelect: PropTypes.func.isRequired,
	handleNewContactSubmit: PropTypes.func.isRequired
}

