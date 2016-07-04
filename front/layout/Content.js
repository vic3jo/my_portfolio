import React from 'react';
import About from './content_sections/About'


class Content extends React.Component{

	render()
	{
		return (
			<section id="page-body" className="container">
				<About />
			</section>
		)
	}
}

export default Content;