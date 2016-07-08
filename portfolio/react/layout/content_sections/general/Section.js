import React from 'react';
import Glyphicon from './Glyphicon';

class Section extends React.Component
{
	render()
	{
		const {id, title, iconType} = this.props;
		return (
			<section id={id}>
				<div className="row">
						<div className="page-header">
						  <h1 className="cursive-style">
						  	<Glyphicon iconType={iconType}/>
						  	<span className="section-title">{title}</span>
						  </h1>
						</div>
						<div className="content">
							{this.props.children}
						</div>
				</div>
			</section>
		)
	}
}

export default Section;