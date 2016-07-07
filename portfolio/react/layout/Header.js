import React from 'react';


class Header extends React.Component{

	render()
	{
		return (
			<header className="container">
				<div className="navbar navbar-default navbar-fixed-top">
					<div className="navbar-header col-offset-md-1">
						<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span> 
					    </button>

						<h1 className="cursive-style">
							<span className="glyphicon glyphicon-folder-open">&nbsp;</span>My Portfolio
						</h1>
						
					</div>
					<div className="collapse navbar-collapse" id="myNavbar">
						<nav>
							 <ul className="nav navbar-nav navbar-right">
						            
						            <li className="nav">
						            	<a href="#about">About</a>
						            </li>
						            <li className="nav">
						            	<a href="#academic-projects">Academic projects</a>
						            </li>
						            <li className="nav">
						            	<a href="#personal-projects">Personal projects</a>
						            </li>
						            <li className="nav">
						            	<a href="#education">Education</a>
						            </li>
						            <li className="nav">
						            	<a href="#experience">Experience</a>
						            </li>
						            <li className="nav">
						            	<a href="#skills">Skills</a>
						            </li>
	      					</ul>	
						</nav>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;