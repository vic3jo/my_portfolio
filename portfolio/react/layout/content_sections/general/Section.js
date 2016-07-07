import React from 'react';


class Section extends React.Component{
	
	render()
	{
		
		const id = this.props.id;
		const title = this.props.title;
		const glyphicon = "glyphicon " + this.props.glyphicon;

		return (
			<section id={id}>
				<div className="row">
						<div className="page-header">
						  <h1 className="cursive-style">
						  	<span className={glyphicon}></span> 
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