import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ name, phone, selected, onClick }) => {
	<li className={selected ? 'contact contact--selected' : 'contact'}>
		<div className="contact__name">
			{name}
		</div>
		<div className="contact__phone">
			{phone}
		</div>
		<input type="checkbox" checked={selected} onClick={onClick} className="contact__checkbox"/>
	</li>
}

Contact.propTypes = {
	name: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
	selected: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Contact;