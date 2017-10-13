import React from 'react';

const Filters = () => (
	<p>
		Show:
		{" "}
		<Filter filter="SHOW_ALL">
			All
		</Filter>
		{", "}
		<Filter filter="SHOW_SELECTED">
			Selected
		</Filter>
	</p>
)

export default Filters;