/*jshint esversion: 6*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsFetchData } from '../actions/contacts';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contact: {}
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(prop, e) {
		const temp = {
			...this.state.contact,
			[prop]: e.target.value
		};
		this.setState{
			contact: temp
		};
	}

	render() {
		return (
			<form className='new-contact'
				onSubmit={this.props.handleSubmit}>
				<label>
				First Name
					<input type='text'
						onChange={this.handleChange('first_name')}
						name='first_name'
						value={this.state.first_name}
					/>
				</label>
				<label>
				Last Name
					<input type='text'
						onChange={this.handleChange('last_name')}
						name='last_name'
						value={this.state.last_name}
					/>
				</label>
				<label>
				<label>
				Gender
					<input type="radio"
						onClick={this.props.handleGender}
						name='gender_male'
						value={this.props.gender === 'male'}

					/>
					<input type='radio'
						onClick={this.props.handleGender}
						name='gender_female'
						value={this.props.gender === 'female'}
					/>
				</label>
				<label>
				Phone
					<input type='text'
						onChange={this.handleChange('phone')}
						name='phone'
						value={this.state.phone}
					/>
				</label>
				Email:
					<input type='text'
						onChange={this.handleChange('email')}
						name='email'
						value={this.state.email}
					/>
				</label>
				<input type='submit' value='Add Contact' />
			</form>
		);
	}
}

ContactList.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	handleBlur: PropTypes.func.isRequired,
	handleGender: PropTypes.func.isRequired,
}

