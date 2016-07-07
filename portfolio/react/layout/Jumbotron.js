import React from 'react';


class Jumbotron extends React.Component{

	render()
	{	
		let title = "It is me, Victor Trejo.";
		let imageUrl = "/static/images/gatsby.jpg";
		let description = "Web and mobile software developer and Computer Science MS alumnus at RIT."

		return (

			<div className="jumbotron">
				<div className="container">
					 <div className="thumbnail col-xs-3">
				      	<img src={imageUrl}  />
				     </div>
				     <div className="col-xs-9">
				     		<h1 className="cursive-style">
				     			<span className="glyphicon glyphicon-glass"></span>
				     			{title}
				     		</h1>
					  		<h2>
					  			<p>
					  				{description}
					  			</p>
					  		</h2>	
				     </div>
				</div>
			  
			</div>

		)
	}
}

export default Jumbotron;