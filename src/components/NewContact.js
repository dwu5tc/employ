/*jshint esversion: 6*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsFetchData } from '../actions/contacts';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return {
			<form 
				onSubmit=props.>
				<label>
				First Name
					<input type="text"
						name="firstName"
						type=""
						value={}
					/>
				</label>
				<label>
				Last Name
					<input type="text"
						name="lastName"
						type=""
						value={}
					/>
				</label>
				<label>
				Email:
					<input type="text"
						name="email"
						type=""
						value={}
					/>
				</label>
				<label>
				Gender
					<input type="text"
						name="gender"
						type=""
						value={}
					/>
				</label>
				<label>
				Phone
					<input type="text"
						name="phone"
						type=""
						value={}
					/>
				</label>
				<button onClick={() => {
					dispatch(addTodo(input.value));
					input.value = '';
				}}>
					Add Todo
				</button>
			</form>
		}
	}
}

ContactList.propTypes = {
	
}

