import React from 'react';
import Navigator from './content_sections/general/Navigator';
import NavigatorLink from './content_sections/general/NavigatorLink';
import Glyphicon from './content_sections/general/Glyphicon';



class Header extends React.Component
{
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
							<Glyphicon iconType="folder-open" /> My Portfolio
						</h1>
						
					</div>
					<div className="collapse navbar-collapse" id="myNavbar">
						<Navigator>
							<NavigatorLink href="#about">
								<Glyphicon iconType="user" /> About
							</NavigatorLink>

							<NavigatorLink href="#experience">
								<Glyphicon iconType="road" /> Experience
							</NavigatorLink>

							<NavigatorLink href="#skills">
								<Glyphicon iconType="plus-sign" /> Skills
							</NavigatorLink>

							<NavigatorLink href="#education">
								<Glyphicon iconType="education" /> Education
							</NavigatorLink>

							<NavigatorLink href="#academic-projects">
								<Glyphicon iconType="blackboard" /> 
								Academic projects
							</NavigatorLink>

							<NavigatorLink href="#personal-projects">
								<Glyphicon iconType="sunglasses" /> 
								Personal projects
							</NavigatorLink>
						</Navigator>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;