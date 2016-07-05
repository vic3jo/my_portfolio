import React from 'react';


class Section extends React.Component{
	renderContent(){ return '';}
	getTitle(){ return '';}
	getId(){ return '';}
	getGlyphIcon(){ return '';}

	
	
	render()
	{
		
		const id = this.getId();
		const title = this.getTitle();
		const content = this.renderContent();
		const glyphicon = "glyphicon " + this.getGlyphIcon();

		return (
			<section id={id}>
				<div className="row">
						<div className="page-header">
						  <h1 className="cursive-style">
						  	<span className={glyphicon}> </span>
						  	{title}
						  </h1>
						</div>
						<div className="content">
							{content}
						</div>
				</div>
			</section>
		)
	}
}

export default Section;