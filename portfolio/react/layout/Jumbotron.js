import React from 'react';
import ListGroup from './content_sections/general/ListGroup'
import ListGroupItem from './content_sections/general/ListGroupItem';

class Jumbotron extends React.Component{

	render()
	{	
		let title = "It's me, Victor Trejo.";
		let imageUrl = "/static/images/gatsby.jpg";
		let description = "Web and mobile software developer and Computer Science MS alumnus at RIT."

		return (

			<div className="jumbotron">
				<div className="container">
					 <div className="thumbnail col-md-2 col-xs-4">
				      	<img src={imageUrl}  />
				     </div>
				     <div className="col-md-6 col-xs-8">
				     		<h1 className="cursive-style">
				     			<span className="glyphicon glyphicon-glass"></span>
				     			{title}
				     		</h1>
					  		<h2>
					  			<p>
					  				{description}
					  			</p>
					  		</h2>
					  		<ListGroup>
					  			<ListGroupItem 
										key={1} 
										title="(585) 286-7684" 
										badge="earphone"
										isBadgeIcon={true}
										/>
								<ListGroupItem 
										key={2} 
										title="vic3jo AT gmail DOT com"
										isBadgeIcon={true}
										badge="envelope" />		
					  		</ListGroup>
				     </div>
				</div>
			  
			</div>

		)
	}
}

export default Jumbotron;