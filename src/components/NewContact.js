/*jshint esversion: 6*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsFetchData } from '../actions/contacts';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			email: '',
			phone: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {

	}

	render() {
		return (
			<form 
				onSubmit={this.props.handleSubmit}>
				<label>
				First Name
					<input type='text'
						name='first_name'
						value={}
					/>
				</label>
				<label>
				Last Name
					<input type='text'
						name='last_name'
						value={}
					/>
				</label>
				<label>
				Email:
					<input type='text'
						name='email'
						value={}
					/>
				</label>
				<label>
				Gender
					<input type='text'
						name='gender'
						value={}
					/>
				</label>
				<label>
				Phone
					<input type='text'
						name='phone'
						value={}
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

