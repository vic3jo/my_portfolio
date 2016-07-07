import React from 'react';


class Jumbotron extends React.Component{

	render()
	{
		return (
			<div className="jumbotron">
				<div className="container">
					 
					 <div className="thumbnail col-xs-3">
				      	<img src="/static/images/gatsby.jpg" alt="..." />
				     </div>

				     <div className="col-xs-9">
				     		<h1 className="cursive-style">
				     			<span className="glyphicon glyphicon-glass"></span>
				     			It is me, Victor Trejo.
				     		</h1>
					  		<h2>
					  			<p>
					  				Web and mobile software developer.
					  			</p>
					  			<p>
					  				Computer Science MS alumnus at RIT.	
					  			</p>
					  			
					  		</h2>	
				     </div>
					
				</div>
			  
			</div>

		)
	}
}

export default Jumbotron;