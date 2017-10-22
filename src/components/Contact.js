// jshint esversion: 6

import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ id, first_name, last_name, phone, selected, onClick }) => { // destructuring
	// format the phone number here?
	return (
		<li className={selected ? 'contact contact--selected' : 'contact'}>
			<div className='contact__name'>
				{first_name + " " + last_name}
			</div>
			<div className='contact__phone'>
				{phone}
			</div>
			<input type='checkbox' checked={selected} onClick={onClick} className='contact__checkbox'/>
		</li>
	);
}

Contact.propTypes = {
	id: PropTypes.number.isRequired,
	first_name: PropTypes.string.isRequired,
	last_name: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	selected: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Contact;