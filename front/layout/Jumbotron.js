import React from 'react';


class Jumbotron extends React.Component{

	render()
	{
		return (
			<div className="jumbotron">
				<div className="container">
					 
					 <div className="thumbnail col-md-3">
				      	<img src="/images/gatsby.jpg" alt="..." />
				     </div>

				     <div className="col-md-9">
				     		<h1 className="cursive-style">
				     			<span className="glyphicon glyphicon-glass"></span>
				     			It is me, Victor
				     		</h1>
					  		<h2>
					  			<p>
					  				Software and mobile developer.
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