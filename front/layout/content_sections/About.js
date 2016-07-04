import React from 'react';


class About extends React.Component{

	render()
	{
		return (
			<section id="about">
				<div className="row">
					
						<div className="page-header">
						  <h1 className="cursive-style">
						  	<span className="glyphicon glyphicon-user"></span> About me
						  </h1>
						  <small>Learning is awesome!</small>
						</div>
						<div className="content">
							<p>
								I am a web developer who is pationate about the Machine Learning topic.
							</p>
						</div>
					
				</div>
			</section>
		)
	}
}

export default About;